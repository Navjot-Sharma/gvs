import React from 'react';
import AppImage from '../app-image/AppImage';

const AppLogo = () => {
  return <AppImage
  src={require('../../../assets/images/logo.png')}
  relativePath
  size={{
    height: 100,
    width: 100,
  }}
  fixResolution
/>
};

export default AppLogo;
