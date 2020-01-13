import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LocalStorage, Cookie } from 'combo-storage';
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
    bottomPosition: PropTypes.bool,
    title: PropTypes.string,
    text: PropTypes.string,
    maxAge: PropTypes.number,
    textForConsent: PropTypes.string,
    textForSkip: PropTypes.string
  };

  static defaultProps = {
    bottomPosition: false,
    title: 'Cookie disclaimer',
    text: 'We use cookies to operate the website and platform, for analytical purposes, and for advertising/targeting purposes.',
    textForConsent: 'I agree',
    textForSkip: 'Skip'
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
    const closeDisclaimer = this.state.close;
    const positionObj = this.props.bottomPosition ? {bottom: 0} : {top: 0};
    const style = {
      visibility: closeDisclaimer ? 'hidden' : 'visible',
      ...positionObj
    };

    return(
        <div className='cookie-disclaimer' id='cookie-disclaimer' style={style}>
          <div className='cookie-disclaimer__close' onClick={this.closeDisclaimer} />
          <div className='cookie-disclaimer__text'>{this.props.text}</div>
        </div>
    );
  }
}
