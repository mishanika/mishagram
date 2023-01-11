import React from 'react';
import './App.css';
import { Layout } from './containers/layout';
import { Navigation } from './containers/navigation';
import Registration from './containers/login/Login';

const App = () => {
  return (
    // <Layout>
    //   <Navigation />
    // </Layout>
    <Registration />
  );
};

export default App;
