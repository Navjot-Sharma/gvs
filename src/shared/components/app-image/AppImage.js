import classnames from 'classnames';
import React from 'react';
// import { Link } from "react-router-dom";
import AppLoader from '../app-loader/AppLoader';
import './AppImage.scss';



// todo cancel this request in unmount
const webWorkerScript = `
  self.addEventListener('message', event => {
    const url = (event.data);
    console.log('image url', url);
    fetch(url, {
        method: 'GET',
        mode: 'no-cors',
        cache: 'default'
    }).then(response => {
        return response.blob();
    }).then(_ => postMessage(url)).catch(console.error);
  })
`;

class AppImage extends React.Component {

  image = null;
  worker = null;

  constructor(props) {
    super(props);
    this.state = {
      ref: React.createRef(null),
      height: 0,
      isVisible: false,
      imageLoaded: false,
      src: this.props.src,
      prefix: this.props.prefix || '',
      d: this.props.d || '',
    };
  }

  mapUrl = () => {

    // image is from relative path
    if (this.props.relativePath) {
      return this.props.src.default;
    }
    if (!this.props.src) {
      return;
    }
    if (this.props.src && this.props.src.startsWith('data:image/')) {
      return this.props.src;
    }
    let url = this.state.prefix + this.props.src + this.state.d;
    if (!url.startsWith('http')) {
      if (this.props.ignoreEnv) {
      url = process.env.REACT_APP_CDN + '/' + url;
      } else {
        url = process.env.REACT_APP_ENV_CDN + '/' + url;
      }
    }
    return url;
  };

  componentDidMount() {
    let height = this.props.size?.height;
    let width = this.props.size?.width;

    if (this.props.size?.height) {
      height = this.props.size?.height;
      this.setState({height: this.props.size?.height});
    } else if (this.props.res) {
      height = (1 / this.props.res) * this.state.ref.current.offsetWidth;
    }
    if (this.props.fixResolution) {
      width = this.props.res * height;
    }

    const style = {};
    if (height) {
      style.height = height;
    }
    if (width) {
      style.width = width;
    }

    const finalState = {height, width, style};

    this.setState(finalState);
    const config = {
      rootMargin: '0px',
      threshold: 0.5
    };
    let observer = new IntersectionObserver(this.handleObserve, config);
    observer.observe(this.state.ref.current);
  }

  componentDidUpdate(props) {
    if (props.src !== this.props.src) {
      this.setState({src: this.props.src});
    }
    if (props.prefix !== this.props.prefix) {
      this.setState({prefix: this.props.prefix || ''});
    }
  }

  componentWillUnmount() {
    if (this.worker && this.worker.terminate) {
      this.worker.terminate();
    }
  }

  handleObserve = res => {
    if (res[0] && (res[0].isVisible || res[0].isIntersecting)) {
      this.onView();
    }
  };

  onView = () => {
    this.setState({isVisible: true});
    // this.worker = new Worker(URL.createObjectURL(
    //   new Blob([webWorkerScript], { type: 'application/javascript' })
    // ));
    // this.worker.onmessage = (event) => {
    //   this.loadImage(event.data);
    // };
    // if (this.props.src) {
    //   this.worker.postMessage(this.mapUrl());
    // }
  };

  loadImage = (url) => {
    const image = new Image();
    this.image = image;
    
    image.src = this.mapUrl();
    image.decode !== undefined ? image.decode().then(this.onLoad).catch(this.onImageError) : this.setState({imageLoaded: true});
  }

  onImageError = err => {
    // console.log('image err - ', this.state, err);
  }
  
  onImageLoad = () => {
    if (!this.state.imageLoaded) {
      this.setState({imageLoaded: true});
    }
  }

  // this is responsible for removing loader and showing image (most probably)
  onLoad = () => {
    this.setState({ imageLoaded: true });
  }
  

  getImageTag() {
    return (<>
      {this.state.src && <img
        src={this.state.isVisible ? this.mapUrl() : ''}
        alt={this.props.alt}
        className={classnames(this.props.className, this.props.imageClass, {
          'd-none': (!this.state.imageLoaded)
        })}
        style={{...this.props.style, ...this.state.style}}
        key={this.props.key}
        onLoad={this.onImageLoad}
        onError={this.onImageError}
      />}

      {!this.state.src && <div
        style={{...this.props.style, ...this.state.style}} 
        className={classnames(this.props.defaultClass ?? 'purpink', this.props.className, this.props.imageClass, {
        'd-none': (!this.state.imageLoaded && !this.props.showDefault)
      })}></div>}
    </>);
  }

  render() {
    return (
      <div className={classnames(this.props.topClasses, {
        'relative': !this.props.absolute
      })}>
        {this.props.overlay && <div className='app-image-overlay'></div>}
        {this.getImageTag()}
        {/* {(this.state.isVisible || (this.state.imageLoaded || (this.props.showDefault && !this.state.src))) && (this.props.link ? <Link to={this.props.link}>{this.getImageTag()}</Link> : this.getImageTag())} */}
        {<div
          ref={this.state.ref}
          style={{ ...this.props.size, height: this.state.height }}
          className={classnames(this.props.className, this.props.imageClass, {
            'd-none': (this.state.imageLoaded || (this.props.showDefault && !this.state.src))
          })}
        >
          <AppLoader
            size={{ ...this.props.size, height: this.state.height }}
            style={{ ...this.props.size, height: this.state.height }}
            className={this.props.className}
          />
        </div>}
      </div>
    );
  }
}

export default AppImage;