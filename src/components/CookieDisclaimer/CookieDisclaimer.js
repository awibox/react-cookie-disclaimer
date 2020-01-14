import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LocalStorage } from 'combo-storage';
// Styles
import './CookieDisclaimer.css';

export class CookieDisclaimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      close: false,
      hasStorage: LocalStorage.get('react-cookie-disclaimer')
    };
    this.closeDisclaimer = this.closeDisclaimer.bind(this);
  }

  static propTypes = {
    background: PropTypes.string,
    bottomPosition: PropTypes.bool,
    color: PropTypes.string,
    text: PropTypes.string,
  };

  static defaultProps = {
    background: '#fff',
    bottomPosition: false,
    color: '#000',
    cookiePolicyLink: '',
    cookiePolicyName: 'Cookie Policy',
    cookiePolicyText: 'By continuing to use the service, you agree to our use of cookies as described in the',
    text: 'This website uses cookies to improve service, for analytical and advertising purposes.',
  };

  closeDisclaimer(){
    this.setState({close: true});
    LocalStorage.set('react-cookie-disclaimer', true);
    if(!this.props.bottomPosition) {
      document.body.style.marginTop = 0;
    }
  }
  componentDidMount() {
    if(!this.state.hasStorage && !this.props.bottomPosition) {
      const disclaimer = document.getElementById('cookie-disclaimer').offsetHeight;
      document.body.style.marginTop = disclaimer + 'px';
    }
  }
  render() {
    if(this.state.hasStorage) {
      return null;
    }
    const {
      background,
      bottomPosition,
      color,
      cookiePolicyLink,
      cookiePolicyText,
      cookiePolicyName,
      text
    } = this.props;
    const closeDisclaimer = this.state.close;
    const positionObj = bottomPosition ? {bottom: 0} : {top: 0};
    const style = {
      visibility: closeDisclaimer ? 'hidden' : 'visible',
      backgroundColor: background,
      color: color,
      ...positionObj
    };

    return(
      <div className='cookie-disclaimer' id='cookie-disclaimer' style={style}>
        <div className='cookie-disclaimer__close' onClick={this.closeDisclaimer} />
        <div className='cookie-disclaimer__text'>
          {text}
          <span style={{display: cookiePolicyLink ? 'inline' : 'none'}}>
            {` ${cookiePolicyText} `}
            <a href={cookiePolicyLink} style={{color: color}}>{cookiePolicyName}</a>
          </span>
        </div>
      </div>
    );
  }
}
