import React from 'react'

const ButtonCreate = (props) => {
  return (
    <div>
      <input type='button' className={props.btnClass} value={props.btnValue} onClick={props.btnClick} />
    </div>
  )
}

ButtonCreate.propTypes = {
  btnClass : React.PropTypes.string.isRequired,
  btnValue : React.PropTypes.string.isRequired,
  btnClick : React.PropTypes.func.isRequired
}

export default ButtonCreate
