import React from "react";
import AppLink from "../../shared/components/app-link/AppLink";
import AppLogo from '../../shared/components/app-logo/AppLogo';

import {
  IoLogoFacebook, 
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube
} from 'react-icons/io5';

export default class Footer extends React.Component {

  render() {
    return <section className='shadow-smooth py-20'>
      <div className='d-flex aic jcb'>
        <p className='ml-50'><AppLink withoutLine link='/'>Campaigns</AppLink></p>
        <p className='ml-50'><AppLink withoutLine link='/'>Gallery</AppLink></p>
        <p className='ml-50'><AppLink withoutLine link='/'>Fund Us</AppLink></p>
        <p className='ml-50'><AppLink withoutLine link='/'>About Us</AppLink></p>
        <p className='ml-50'><AppLink withoutLine link='/'>Contact Us</AppLink></p>
      </div>

      <hr className='w-80 my-20' />

      <div className='text-center'>
        <AppLogo />

        <p>
          Our resources alone cannot make the difference, we need your support to improve lives. <br />
          Become our partner with a small extension of kindness to foster greater public care.
        </p>

        <div>
          <IoLogoInstagram className='mx-20 f-20' />
          <IoLogoFacebook className='mx-20 f-20' />
          <IoLogoTwitter className='mx-20 f-20' />
          <IoLogoYoutube className='mx-20 f-20' />
        </div>
      </div>
    </section>
  }
}
