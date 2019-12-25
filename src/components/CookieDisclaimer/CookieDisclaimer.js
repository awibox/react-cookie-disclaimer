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
    };
    this.closeDisclaimer = this.closeDisclaimer.bind(this);
  }

  static propTypes = {
    text: PropTypes.string,
    maxAge: PropTypes.number,
  };

  static defaultProps = {
    text: 'We use cookies to operate the website and platform, for analytical purposes, and for advertising/targeting purposes.',
    maxAge: 3600
  };

  closeDisclaimer(){
    this.setState({close: true});
    Cookie.set('react-cookie-disclaimer', true, {'max-age': this.props.maxAge})
  }
  render() {
    const hasCookie = Cookie.get('react-cookie-disclaimer');
    const hasStorage = LocalStorage.get('react-cookie-disclaimer');
    if(hasCookie || hasStorage) {
      return null;
    }
    const closeDisclaimer = this.state.close;
    return(
        <div className='cookie-disclaimer' style={closeDisclaimer ? {visibility: 'hidden'} : {}}>
          <div className='cookie-disclaimer__close' onClick={this.closeDisclaimer} />
          {this.props.text}
        </div>
    );
  }
}
