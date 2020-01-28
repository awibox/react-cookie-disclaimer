![react-cookie-disclaimer](https://repository-images.githubusercontent.com/229484861/fbde4700-36cf-11ea-88fe-db2690c68f8e)

<p align="center">
    <a href="https://www.npmjs.com/package/react-cookie-disclaimer">
        <img src="https://img.shields.io/npm/v/react-cookie-disclaimer" alt="npm version">
    </a>
    <a href="https://travis-ci.org/awibox/react-cookie-disclaimer">
        <img src='https://travis-ci.org/awibox/react-cookie-disclaimer.svg?branch=master' alt='Build' />
    </a>
    <a href='https://coveralls.io/github/awibox/react-cookie-disclaimer?branch=master'>
        <img src='https://coveralls.io/repos/github/awibox/react-cookie-disclaimer/badge.svg?branch=master' alt='Coverage Status' />
    </a>
    <a href="https://www.npmjs.com/package/react-cookie-disclaimer">
        <img src="https://img.shields.io/npm/dm/react-cookie-disclaimer" alt="Downloads">
    </a>
    <img src="https://img.shields.io/npm/l/react-cookie-disclaimer" alt="license">
</p>

## Table of contents
* [Installation](#installation)
* [Getting started](#gettingstarted)
* [The settings of the component](#settings)
* [Custom content](#custom)
* [Custom styles](#styles)
* [Example](#example)
* [Contributing](#contributing)

<a name="installation"></a>
## Installation
You need to install package:
```bash
npm install react-cookie-disclaimer
```
You can use yarn:
```bash
yarn add react-cookie-disclaimer
```
<a name="gettingstarted"></a>
## Getting started
You should import the component:
```js
import CookieDisclaimer from 'react-cookie-disclaimer';
```
Then use the component in your application. For example:
```typescript jsx
<CookieDisclaimer background='#0079c1' color='#fff' cookiePolicyLink='/cookie-policy' />
```

<a name="settings"></a>
## The settings of the component
|Parameter|Type|Description|Default|
|--------------------|--------|-----------|-------|
|**background**|string|Sets the color for the background in any format that supports css|``` #fff ```|
|**bottomPosition**|boolean|By default, the notification is displayed at the top of the page and the value of this parameter is ```false```. If set to ```true```, the notification will be displayed at the bottom|``` false ```|
|**color**|string|Sets the color of the text and the cross to close|``` #000 ```|
|**cookiePolicyName**|string|Sets the name for the cookie policy link|``` Cookie Policy ```|
|**cookiePolicyText**|string|Sets the text before the cookie policy link. It is recommended to set value because default text may change in future versions|``` By continuing to use the service, you agree to our use of cookies as described in the ```|
|**cookiePolicyLink**|string|Link to your cookie policy. If the link value is not set, the link with the name (cookiePolicyName) and the text before the link (cookiePolicyText) will not be displayed|-|
|**text**|string|This is the main text that will be displayed in the notification. It is recommended to set value because default text may change in future versions|``` This website uses cookies to improve service, for analytical and advertising purposes. ```|
|**closeIconSize**|number|Sets the size of the icon to close the notification|``` 28 ```|
|**closeIconPositionTop**|boolean|By default the icon for closing is displayed in the middle relative to the height of the notification and the value of this parameter is ```false```. If set to ```true```, the closing icon will be displayed on the top|``` false ```|
|**padding**|number|Sets padding for cookie notification|``` 20 ```|

<a name="custom"></a>
## Custom content
You can place your own content in the notification. You should call the component as follows:
```typescript jsx
<CookieDisclaimer background='#000' color='#fff'>JSX custom content</CookieDisclaimer>
```

<a name="styles"></a>
## Custom styles
You can also add custom styles by passing the ```className``` parameter:
```typescript jsx
<CookieDisclaimer className={styles.cookieDisclaimer}>JSX custom content</CookieDisclaimer>
```

<a name="example"></a>
## Example
```typescript jsx
import CookieDisclaimer from 'react-cookie-disclaimer';

const App = () => (
  <div className="app">
    ...
    <CookieDisclaimer 
      background='#0079c1' 
      bottomPosition={false}
      closeIconSize={30}
      closeIconPositionTop={false}
      color='#fff'
      cookiePolicyName='Cookie Policy'
      cookiePolicyLink='/cookie-policy' 
      cookiePolicyText='By continuing to use the service, you agree to our'
      text='This website uses cookies to improve service.'
    />
  </div>
);
export default App;
```

<a name="contributing"></a>
## Contributing
Please read through our [CONTRIBUTING.md](/.github/CONTRIBUTING.md).
