import React from 'react';
import AppLink from '../../shared/components/app-link/AppLink';
import AppLogo from '../../shared/components/app-logo/AppLogo';

const Header = () => {
  return <section className='d-flex jca aic shadow-smooth'>
    <div className='d-flex jca'>
      <p className='ml-50'><AppLink link='/'>Campaigns</AppLink></p>
      <p className='ml-50'><AppLink link='/'>Gallery</AppLink></p>
    </div>
    <AppLogo />
    <div className='d-flex jca'>
      <p className='ml-50'><AppLink link='/'>About Us</AppLink></p>
      <p className='ml-50'><AppLink link='/'>Contact Us</AppLink></p>
    </div>
  </section>;
};

export default Header;
