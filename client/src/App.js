import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './comp/Header';
import LeftSide from './comp/LeftSide';
import Main from './comp/Main';

export default function App() {
  return <div className='app'>
    <Router>
      <Header  />
      <Main />
      <LeftSide />
    </Router>
  </div>;
}
