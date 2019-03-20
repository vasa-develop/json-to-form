import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Page from './components/page'
import FormLayout from './components/formLayout'


import { Provider } from 'react-redux';
import './App.css';
import store from './store'

class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path={"/form/:id/page/:index"} component={FormLayout} />
        </Router>
      </Provider>
    );
  }
}

export default App;
