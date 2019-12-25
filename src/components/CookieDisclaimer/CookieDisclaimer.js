import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    text: PropTypes.string
  };

  static defaultProps = {
    text: 'We use cookies to operate the website and platform, for analytical purposes, and for advertising/targeting purposes.'
  };

  closeDisclaimer(){
    console.log('Close')
  }

  render() {

    return(
        <div className='cookie-disclaimer'>
          <div className='cookie-disclaimer__close' onClick={this.closeDisclaimer} />
          {this.props.text}
        </div>
    );
  }
}
