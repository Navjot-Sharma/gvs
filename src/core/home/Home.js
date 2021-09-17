import React from 'react';
import AppImage from '../../shared/components/app-image/AppImage';

export default class Home extends React.Component {

  render() {
    return <section>
      <AppImage
        style={{
          width: '100vw'
        }}
        src='https://picsum.photos/1280/720'
        size={{
          height: 720,
          width: '100vw'
        }}
      />
    </section>
  }
}

