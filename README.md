![react-cookie-disclaimer](https://repository-images.githubusercontent.com/229484861/fbde4700-36cf-11ea-88fe-db2690c68f8e)

## Table of contents
* [Installation](#installation)
* [Getting started](#gettingstarted)
* [The settings of the component](#settings)
* [Example](#example)

<a name="installation"></a>
## Installation
You need to install package.
```bash
npm install react-cookie-disclaimer
```
You can use yarn.
```bash
yarn add react-cookie-disclaimer
```
<a name="gettingstarted"></a>
## Getting started
You should import the component and css file
```js
import CookieDisclaimer from 'react-cookie-disclaimer';
import 'react-cookie-disclaimer/dist/css/main.css';
```
Then use the component in your application. For example:
```typescript jsx
<CookieDisclaimer background='#0079c1' color='#fff' cookiePolicyLink='/cookie-policy' />
```

<a name="settings"></a>
## The settings of the component
#### background
Sets the color for the background in any format that supports css.
```typescript jsx
<CookieDisclaimer background='#0079c1' />
```
Default value: ``` #fff ```

#### bottomPosition
By default, the notification is displayed at the top of the page and the value of this parameter is ```false```. 
If set to ```true```, the notification will be displayed at the bottom.
```typescript jsx
<CookieDisclaimer bottomPosition={true} />
```

#### color
Sets the color of the text and the cross to close.
```typescript jsx
<CookieDisclaimer bottomPosition='#fff' />
```
Default value: ``` #000 ```

#### cookiePolicyName
Sets the name for the cookie policy link
```typescript jsx
<CookieDisclaimer cookiePolicyName='our Cookie Policy' />
```
Default value: ``` Cookie Policy ```

#### cookiePolicyText
Sets the text before the cookie policy link. 
It is recommended to set value because default text may change in future versions.
```typescript jsx
<CookieDisclaimer cookiePolicyText='Please read' />
```
Default value: ``` By continuing to use the service, you agree to our use of cookies as described in the ```

#### cookiePolicyLink
Link to your cookie policy. 
If the link value is not set, the link with the name (cookiePolicyName) and the text before the link (cookiePolicyText) will not be displayed.
```typescript jsx
<CookieDisclaimer cookiePolicyLink='/cookie-policy' />
```

#### text
This is the main text that will be displayed in the notification. It is recommended to set value because default text may change in future versions.
```typescript jsx
<CookieDisclaimer text='This website uses cookies to improve service.' />
```
Default value: ``` This website uses cookies to improve service, for analytical and advertising purposes. ```

<a name="example"></a>
## Example
```typescript jsx
import CookieDisclaimer from 'react-cookie-disclaimer';
import 'react-cookie-disclaimer/dist/css/main.css';

const App = () => (
  <div className="app">
    ...
    <CookieDisclaimer 
        background='#0079c1' 
        bottomPosition={false}
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
