import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/crud' activeClassName='route--active'>
      CRUD
    </Link>
    {' · '}
    <Link to='/simpleForm' activeClassName='route--active'>
      Simple Form
    </Link>
  </div>
)

export default Header
