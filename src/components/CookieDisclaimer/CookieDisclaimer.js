import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Styles
import './CookieDisclaimer.css';

export class CookieDisclaimer extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {
    text: 'We use cookies to operate the website and platform, for analytical purposes, and for advertising/targeting purposes.'
  };
  render() {
    return(
        <div className='cookie-disclaimer'>
          <div className='cookie-disclaimer__close' />
          {this.props.text}
        </div>
    );
  }
}
