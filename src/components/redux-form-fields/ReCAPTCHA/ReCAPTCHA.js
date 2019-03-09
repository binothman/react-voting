import React from 'react'
import Recaptcha from "react-recaptcha"

class ReCAPTCHA extends React.Component {
  handleVerifyCallback = () => {
    this.props.input.onChange(true)
  }

  render(){
    const { meta: { error, touched } } = this.props
    return (
      <div style={{padding: '20px 0'}}>
        <Recaptcha
          sitekey="6LcRNpMUAAAAAD0pmNMmhufqSq_EKMPGPV_GoiJ3"
          verifyCallback={this.handleVerifyCallback}
        />
        {touched && error &&
          <div style={{color: 'red'}}>{error}</div>
        }
      </div>
    )
  }
}

export default ReCAPTCHA
