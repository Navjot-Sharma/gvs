import React from 'react';
import AppImage from '../../shared/components/app-image/AppImage';
import AppLink from '../../shared/components/app-link/AppLink';

const Header = () => {
  return <section className='d-flex jca aic shadow-smooth'>
    <div className='d-flex jca'>
      <p className='ml-50'><AppLink link='/'>Campaigns</AppLink></p>
      <p className='ml-50'><AppLink link='/'>Gallery</AppLink></p>
    </div>
    <AppImage
      src={require('../../assets/images/logo.png')}
      relativePath
      size={{
        height: 100,
        width: 100,
      }}
      fixResolution
    />
    <div className='d-flex jca'>
      <p className='ml-50'><AppLink link='/'>About Us</AppLink></p>
      <p className='ml-50'><AppLink link='/'>Contact Us</AppLink></p>
    </div>
  </section>;
};

export default Header;
