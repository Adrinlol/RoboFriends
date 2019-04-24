import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// This will be the father of all the components
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
// Since we are using export and not export default

ReactDOM.render(
// Return multiple elements by creating a div
 <App/ >, document.getElementById('root'));


serviceWorker.unregister();

