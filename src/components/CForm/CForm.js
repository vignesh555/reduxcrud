import React from 'react'
import TextBoxCreate from '../CTextBox'

const FormComponent = ({ propValue }) => {
  return (<div >
    <form role='form' className='text-left'>
      <div className='form-group'>
        <TextBoxCreate txtBoxValue={propValue.stateData.formField.txtUserName}
          txtBoxOnChange={propValue.handleChange} textBoxName={'txtUserName'}
          txtBoxClass={'form-control'} txtBoxPlaceholder={'Enter a User Name'}
      />
      </div>
    </form>
  </div>)
}

FormComponent.propTypes = {
  propValue : React.PropTypes.object
}

//  <input type='button' onClick={this.handleClick} value='test' />
// <label htmlFor='exampleInputEmail1'>Email address</label>
// <input type='text' value={this.state.input1} name='input1' onChange={this.handleChangeBind} />
// <input type='text' value={this.state.input2} name='input2' onChange={this.handleChangeBind} />
// handleClick () {
//   var input = ReactDOM.findDOMNode(this.refs.itemName)
//   var newItem = input.value
//   console.log(newItem)
// }

// <input type='email' className='form-control'
//   id='exampleInputEmail1' ref='itemName' placeholder='Enter email' />
export default FormComponent
