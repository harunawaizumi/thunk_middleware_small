import React, { Component } from 'react';
import {Provider} from 'react-redux'
import ItemList from './components/ItemList'
import configureStore from './store/configureStore'
const store = configureStore()

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <ItemList />
        </Provider>
    );
  }
}

export default App;
