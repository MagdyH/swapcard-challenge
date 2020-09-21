import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { ToastProvider } from 'react-toast-notifications'

const client = new ApolloClient({
  uri: 'https://graphbrainz.herokuapp.com',
  cache: new InMemoryCache()
});

ReactDOM.hydrate(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ToastProvider>
        <App />
      </ToastProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
