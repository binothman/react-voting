import React from 'react'
import PropTypes from 'prop-types'
import { Input as SemInput } from 'semantic-ui-react'

const Input = ({
  title,
  meta: { error, touched },
  style,
  disabled,
  handleOnChange,
  maxLength,
  input: { type, value, onBlur },
  ...props
}) => (
  <div className="bricks-input" style={style}>
    <div className="bricks-input__label">{title}</div>
    <SemInput
      disabled={disabled}
      fluid
      error={!!(touched && error)}
      {...props}
      onChange={handleOnChange}
      onBlur={onBlur}
      maxLength={maxLength}
      value={value}
      type="text"
    />
    {error && touched && <div className="bricks-input--error">{error}</div>}
  </div>
)

Input.propTypes = {
  title: PropTypes.string,
  meta: PropTypes.object.isRequired,
}

Input.defaultProps = {
  title: null,
}

export default Input
