import React from 'react'
import { Field, reduxForm } from 'redux-form'

const SimpleForm = (props) => {
  const { handleSubmit, pristine, submitting, reset } = props
  return (
    <form className='text-left' onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field name='firstName' className='form-control' component='input' type='text' placeholder='First Name' />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field name='lastName' className='form-control' component='input' type='text' placeholder='Last Name' />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field name='email' className='form-control' component='input' type='email' placeholder='Email' />
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label><Field name='sex' component='input' type='radio' value='male' /> Male</label>
          <label><Field name='sex' component='input' type='radio' value='female' /> Female</label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name='favoriteColor' className='form-control' component='select'>
            <option />
            <option value='ff0000'>Red</option>
            <option value='00ff00'>Green</option>
            <option value='0000ff'>Blue</option>
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor='employed'>Employed</label>
        <div>
          <Field name='employed' id='employed' component='input' type='checkbox' />
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name='notes' className='form-control' component='textarea' />
        </div>
      </div>
      <br />
      <div>
        <button type='submit' className='btn btn-primary'
          disabled={pristine || submitting}>Submit</button>
        <button type='button' className='btn btn-default'
          disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

SimpleForm.propTypes = {
  handleSubmit: React.PropTypes.func,
  reset: React.PropTypes.func,
  submitting : React.PropTypes.bool,
  pristine: React.PropTypes.bool
}

export default reduxForm({
  form : 'simple'
})(SimpleForm)
