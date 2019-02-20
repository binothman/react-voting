import React, { Component } from 'react'

const HOC = WrappedComponent => {
  class Input extends Component{
    handleOnChange = (e, data) => {
      const { type, input } = this.props
      const value = type === 'number' ? data.value.replace(/[^0-9\\.]+/g, '') : data.value
      input.onChange(value)
    }
    
    render(){
      return (
        <WrappedComponent
          {...this.props}
          handleOnChange={this.handleOnChange}
        />
      )
    }
  }

  return Input
}

export default HOC
