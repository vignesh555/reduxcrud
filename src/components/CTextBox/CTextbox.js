import React from 'react'

const TextBoxCreate = (props) => {
  return (
    <div>
      <input value={props.txtBoxValue || ''}
        name={props.textBoxName} type='text'
        className={props.txtBoxClass} placeholder={props.txtBoxPlaceholder}
        onChange={props.txtBoxOnChange} />
    </div>
  )
}

TextBoxCreate.propTypes = {
  txtBoxClass : React.PropTypes.string.isRequired,
  txtBoxPlaceholder : React.PropTypes.string,
  textBoxName : React.PropTypes.string,
  txtBoxOnChange : React.PropTypes.func,
  txtBoxValue : React.PropTypes.string
}

export default TextBoxCreate
