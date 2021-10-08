import React from 'react';
import AppImage from '../../../shared/components/app-image/AppImage';
import './Gallery.scss';

export default class Gallery extends React.Component {

  getRandomHeight = () => {
    const arr = [300, 400, 500, 600, 700, 800];
    return arr[Math.floor(Math.random()*arr.length)];
  };

  heights = {};

  render() {
    return <section className='d-flex jcb'>
      {[1,2,3].map(d => <div>
        {[1,2,3].map(i => <>
          <p className='d-none'>{this.heights[i] = this.getRandomHeight()}</p>
          <AppImage 
          src={`https://picsum.photos/400/${this.heights[i]}`}
          size={{
            height: this.heights[i],
          }}
        />
        </>)}
      </div>)}
    </section>
  }
}

