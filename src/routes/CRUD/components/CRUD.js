import React from 'react'
import CLeftContainer from '../../../components/CLeftContainer'

const CRUD = (props) => {
  return (
    <div>
      <div className='col-md-2'>
        <CLeftContainer saveUserServiceFn={props.saveUserService} />
      </div>
      <div className='col-md-10' />
    </div>
  )
}

export default CRUD
