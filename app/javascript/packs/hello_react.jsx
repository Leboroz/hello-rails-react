// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import {createRoot} from "react-dom/client";
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import App from '../components/App'
import { Provider } from 'react-redux';
import configureStore from '../store';

const store = configureStore();

const Hello = props => (
  <Provider store={ store }>
    <App />
  </Provider>
)

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(
    document.body.appendChild(document.createElement('div'))
  );
  root.render(<Hello />);
})
