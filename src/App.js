import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter, Route } from 'react-router-dom'; //React-Router import

import MainContainer from './containers/MainContainer';
import SearchContainer from './containers/SearchContainer';

const App = () => {
  return (
        <BrowserRouter>
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/search" component={SearchContainer} />
        </BrowserRouter>
  )
}

export default App;
