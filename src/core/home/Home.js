import React from 'react';
import AppImage from '../../shared/components/app-image/AppImage';
import Footer from '../footer/Footer';
import About from './about/About';
import Gallery from './gallery/Gallery';
import './Home.scss';
export default class Home extends React.Component {

  campaigns = [
    { img: '', title: '', text: '' },
    { img: '', title: '', text: '' },
    { img: '', title: '', text: '' },
  ];

  render() {
    return <section>
      <AppImage
        src='https://picsum.photos/1280/720'
        size={{
          height: 720,
          width: '100vw'
        }}
      />

      {/* funding section */}
      <div className='d-flex jca shadow-smooth br-10 p-20 py-0 w-80 my-20'>
        <div>

          <div>
            <h2>Fund Us</h2>
            <p>Bank Details:</p>
            <p>Name: Navjot Sharma</p>
            <p>Bank Account: 987654321123456</p>
            <p>IFSC: 987654321123456</p>
          </div>
          <div className='horizontal-line'></div>
          <div>
            <h2>UPI ID</h2>
            <p>987654321@ybl</p>
          </div>

        </div>

        <div className='vertical-line'></div>
        <div>
          <h2>Or Scan QR</h2>
          <AppImage
            relativePath
            size={{
              height: 200,
              width: 200
            }}
            src={require('../../assets/images/qr.png')}
          />
        </div>
      </div>

      {/* campaigns */}
      <div className='w-80'>
        <h2 className='text-center f-30'>Campaigns</h2>

          <div className='d-flex fdc'>
        {this.campaigns.map((campaign, i) => <div className='campaign shadow-smooth p-20 br-10 relative my-20' style={{
          width: '60%',
          alignSelf: i % 2 === 0 ? 'flex-end' : '',
          minHeight: '300px'
        }}>
          <AppImage
            absolute
            className='br-10 shadow-smooth'
            style={{
              position: 'absolute',
              left: i % 2 === 0 ? '-300px' : undefined,
              right: i % 2 !== 0 ? '-300px' : undefined,
            }}
            src='https://picsum.photos/400/250'
          />

          <div style={{
            marginLeft: i % 2 === 0 ? '200px' : 0,
            marginRight: i % 2 !== 0 ? '200px' : 0,
          }}>
            <h3 className=''>Campaign Title</h3>
            <p className='f-18'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.
            </p>
          </div>
        </div>)}
        </div>

      </div>

      {/* gallery */}

      <div className='w-80'>
        <h2 className='text-center f-30'>Gallery</h2>
        <Gallery />
      </div>

      

      {/* about */}

      <div className='w-80 mt-50'>
        <h2 className='text-center f-30'>About Us</h2>

        <p className='text-center w-80 my-50'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <About />
      </div>

      <Footer />


    </section>
  }
}

