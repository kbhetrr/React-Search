import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter, Route } from 'react-router-dom'; //React-Router import

import MainContainer from './containers/MainContainer';
import SearchContainer from './containers/SearchContainer';
import AboutContainer from './containers/AboutContainer';

const App = () => {
  return (
        <BrowserRouter>
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/search" component={SearchContainer} />
          <Route exact path="/about" component={AboutContainer} />
        </BrowserRouter>
  )
}

export default App;
