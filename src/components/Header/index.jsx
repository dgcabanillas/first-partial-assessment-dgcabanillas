import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <nav className="navbar bg-primary">
      <div className="container-fluid justify-content-center">
        <h1 className='text-light'>{ title }</h1>
      </div>
    </nav>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;
