import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './RouterComponent';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCf17ZsZbdYyiX1x3m1LRP8epZGDM8_lSc',
      authDomain: 'manager-2a031.firebaseapp.com',
      databaseURL: 'https://manager-2a031.firebaseio.com',
      projectId: 'manager-2a031',
      storageBucket: 'manager-2a031.appspot.com',
      messagingSenderId: '598799567987'
    };

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
