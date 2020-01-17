import React from 'react';
import { shallow } from 'enzyme';
import CookieDisclaimer from '../src/components/CookieDisclaimer/CookieDisclaimer';

const testColor = '#fff';
const testBackground = '#000';
const testText = 'This is correct text';
const testCookiePolicyLink = '/cookie-policy';
const testCookiePolicyName = 'Private Policy';
const testCookiePolicyText = 'This is text before link';

describe('CookieDisclaimer', () => {
  it('should render correctly', () => {
    const component = shallow(<CookieDisclaimer />);
    expect(component).toMatchSnapshot();
  });
  it('should have background', () => {
    const component = shallow(<CookieDisclaimer background={testBackground} />);
    expect(component.find('.cookie-disclaimer').get(0).props.style.backgroundColor).toEqual(testBackground);
  });
  it('should have text color', () => {
    const component = shallow(<CookieDisclaimer color={testColor} />);
    expect(component.find('.cookie-disclaimer').get(0).props.style.color).toEqual(testColor);
  });
  it('should have link color', () => {
    const component = shallow(<CookieDisclaimer color={testColor} />);
    expect(component.find('.cookie-disclaimer__cookie-policy-link').get(0).props.style.color).toEqual(testColor);
  });
  it('should have bottom position', () => {
    const component = shallow(<CookieDisclaimer bottomPosition={true} />);
    expect(component.find('.cookie-disclaimer').get(0).props.style.bottom).toEqual(0);
  });
  it('should have top position', () => {
    const component = shallow(<CookieDisclaimer />);
    expect(component.find('.cookie-disclaimer').get(0).props.style.top).toEqual(0);
  });
  it('should hide cookie policy link', () => {
    const component = shallow(<CookieDisclaimer />);
    expect(component.find('.cookie-disclaimer__cookie-policy').get(0).props.style.display).toEqual('none');
  });
  it('should display cookie policy link', () => {
    const component = shallow(<CookieDisclaimer cookiePolicyLink={testCookiePolicyLink} />);
    expect(component.find('.cookie-disclaimer__cookie-policy').get(0).props.style.display).toEqual('inline');
  });
  it('should have correct cookie policy link', () => {
    const component = shallow(<CookieDisclaimer cookiePolicyLink={testCookiePolicyLink} />);
    expect(component.find('.cookie-disclaimer__cookie-policy-link').get(0).props.href).toEqual(testCookiePolicyLink);
  });
  it('should have correct name for cookie policy link', () => {
    const component = shallow(<CookieDisclaimer
        cookiePolicyLink={testCookiePolicyLink}
        cookiePolicyName={testCookiePolicyName} />);
    expect(component.find('.cookie-disclaimer__cookie-policy-link').get(0).props.children).toEqual(testCookiePolicyName);
  });
  it('should have correct text before cookie policy link', () => {
    const component = shallow(<CookieDisclaimer
        cookiePolicyText={testCookiePolicyText}
        cookiePolicyLink={testCookiePolicyLink}
        cookiePolicyName={testCookiePolicyName} />);
    expect(component.find('.cookie-disclaimer__cookie-policy').get(0).props.children[0]).toEqual(` ${testCookiePolicyText} `);
  });
  it('should have correct text for notification', () => {
    const component = shallow(<CookieDisclaimer text={testText} />);
    expect(component.find('.cookie-disclaimer__text').get(0).props.children[0]).toEqual(testText);
  });
  it('should close notification', () => {
    const component = shallow(<CookieDisclaimer />);
    component.find('.cookie-disclaimer__close').simulate('click');
    expect(component.find('.cookie-disclaimer').get(0).props.style.visibility).toEqual('hidden');
  });
});
