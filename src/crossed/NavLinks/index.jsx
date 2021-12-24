import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = () => {
  return (
    <div className="col col-12">
      <Link 
        to='/'
        type="button" 
        className="btn btn-outline-primary btn-sm"
      > ver todos los productos </Link>
      <Link 
        to='/about'
        type="button" 
        className="btn btn-outline-primary btn-sm ms-2"
      > acerca de nosotros </Link>
    </div>
  )
}

export default NavLinks;
