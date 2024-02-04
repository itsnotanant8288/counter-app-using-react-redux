// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './components/counter.component';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Counter App</h1>
        <Counter />
      </div>
    </Provider>
  );
};

export default App;
