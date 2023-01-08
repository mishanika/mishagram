import React from "react";
import "./App.css";
import { Layout } from "./containers/layout";
import { Navigation } from "./containers/navigation";

const App = () => {
  return (
    <Layout>
      <Navigation />
    </Layout>
  );
};

export default App;
