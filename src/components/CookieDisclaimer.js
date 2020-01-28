import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LocalStorage } from 'combo-storage';

const cookieDisclaimerStyle = {
  position: 'fixed',
  right: 0,
  left: 0,
  boxShadow: '0 0 3px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0, 0, 0, 0.24)',
  zIndex: 900,
};

const cookieDisclaimerCloseStyle = {
  textAlign: 'center',
  position: 'absolute',
  transform: 'rotate(45deg)',
  cursor: 'pointer',
  fontFamily: '-webkit-pictograph',
};

class CookieDisclaimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      close: false,
      hasStorage: LocalStorage.get('react-cookie-disclaimer'),
    };
    this.closeDisclaimer = this.closeDisclaimer.bind(this);
  }

  static propTypes = {
    background: PropTypes.string,
    bottomPosition: PropTypes.bool,
    children: PropTypes.any,
    className: PropTypes.string,
    color: PropTypes.string,
    cookiePolicyLink: PropTypes.string,
    cookiePolicyName: PropTypes.string,
    cookiePolicyText: PropTypes.string,
    closeIconSize: PropTypes.number,
    closeIconPositionTop: PropTypes.bool,
    padding: PropTypes.number,
    text: PropTypes.string,
  };

  static defaultProps = {
    background: '#fff',
    bottomPosition: false,
    color: '#000',
    cookiePolicyLink: '',
    cookiePolicyName: 'Cookie Policy',
    cookiePolicyText: 'By continuing to use the service, you agree to our use of cookies as described in the',
    closeIconSize: 28,
    closeIconPositionTop: false,
    padding: 20,
    text: 'This website uses cookies to improve service, for analytical and advertising purposes.',
  };

  closeDisclaimer() {
    this.setState({ close: true });
    LocalStorage.set('react-cookie-disclaimer', true);
    if (!this.props.bottomPosition) {
      document.body.style.marginTop = 0;
    }
  }

  componentDidMount() {
    if (!this.state.hasStorage && !this.props.bottomPosition) {
      const disclaimer = document.getElementById('cookie-disclaimer').offsetHeight;
      document.body.style.marginTop = `${disclaimer}px`;
    }
  }

  render() {
    if (this.state.hasStorage) {
      return null;
    }
    const {
      background,
      bottomPosition,
      children,
      className,
      color,
      cookiePolicyLink,
      cookiePolicyText,
      cookiePolicyName,
      closeIconSize,
      closeIconPositionTop,
      padding,
      text,
    } = this.props;
    const closeDisclaimer = this.state.close;
    const positionObj = bottomPosition ? { bottom: 0 } : { top: 0 };
    const styleForCookieDisclaimer = {
      visibility: closeDisclaimer ? 'hidden' : 'visible',
      backgroundColor: background,
      padding: `${padding}px`,
      paddingRight: `${closeIconSize + padding}px`,
      color,
      ...positionObj,
      ...cookieDisclaimerStyle,
    };
    const styleForCloseButton = {
      lineHeight: `${closeIconSize}px`,
      width: `${closeIconSize}px`,
      height: `${closeIconSize}px`,
      fontSize: `${closeIconSize}px`,
      marginTop: closeIconPositionTop ? 0 : `${closeIconSize / -2}px`,
      right: `${padding / 2}px`,
      top: closeIconPositionTop ? `${padding / 2}px` : '50%',
      ...cookieDisclaimerCloseStyle,
    };
    return (
      <div id='cookie-disclaimer' className={className} style={className ? {} : styleForCookieDisclaimer}>
        <div id='cookie-disclaimer-close' onClick={this.closeDisclaimer} style={styleForCloseButton}>+</div>
        {children || <div id='cookie-disclaimer-text'>
          {text}
          <span id='cookie-policy' style={{ display: cookiePolicyLink ? 'inline' : 'none' }}>
            {` ${cookiePolicyText} `}
            <a id='cookie-policy-link' href={cookiePolicyLink} style={{ color }}>{cookiePolicyName}</a>
          </span>
        </div>
        }
      </div>
    );
  }
}
export default CookieDisclaimer;
