import React from 'react';
import {Provider} from 'react-redux';

import store from 'store';
import Home from 'screens/home';
import Theme from 'providers/theme';

const App = () => {
  return (
    <Theme>
      <Provider store={store}>
        <Home />
      </Provider>
    </Theme>
  );
};

export default App;
