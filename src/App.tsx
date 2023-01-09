<<<<<<< HEAD
import React from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Main from './components/main/Main';
=======
import React from "react";
import "./App.css";
import { Layout } from "./containers/layout";
import { Navigation } from "./containers/navigation";
>>>>>>> add-menu

const App = () => {
  return (
    <Layout>
      <Navigation />
    </Layout>
  );
};

export default App;
