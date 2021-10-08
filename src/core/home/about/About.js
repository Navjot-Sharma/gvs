import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import AppImage from '../../../shared/components/app-image/AppImage';
import '../../../carousel.scss';
import './About.scss';
import { CarouselButton } from '../../../shared/components/app-carousel-buttons/AppCarouselButtons';
import classnames from 'classnames';

export default class About extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0
    };
  }

  render() {
    return <section className='d-flex jcc aic m-auto my-50 ' style={{
      marginTop: '100px !important',
      width: '70%'
    }}>

      <CarouselButton
        className='mr-50 hover-scale'
        handleClick={() => this.setState({currentSlide: Math.max(this.state.currentSlide - 1, 0)})}
      />
      
      <Carousel
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        selectedItem={this.state.currentSlide}
        className='about-carousel shadow-smooth hover-scale br-10 p-20'
      >
      {[1,2,3].map( i => <div className={classnames({
        'd-none': this.state.currentSlide !== (i - 1)
      })} style={{
            // width: '60%',
            justifyContent: 'center',
            marginTop: '30px'
          }}>
        <AppImage
          src='https://picsum.photos/200/200'
          size={{
            height: 200,
            width: 200
          }}
          style={{
            position: 'absolute',
            top: '-10px',
            left: '30px'
          }}
          className='br-10'
        />
        <div className='d-flex jce'>
          <div className='ml-50' style={{
              width: '60%',
            }}>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <h3 className='text-right'>- Mnager</h3>

          </div>
        </div>
      </div>)}

      </Carousel>
      
      <CarouselButton
        style={{
          transform: 'rotate(180deg)'
        }}
        className='ml-50 hover-scale'
        handleClick={() => this.setState({currentSlide: Math.min(this.state.currentSlide + 1, 2)})}
      />
    </section>
  }
}

