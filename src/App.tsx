import React from "react";
import "./App.css";
import { routes } from "./containers/navigation/routes";
import Menu from "./containers/menu/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route path={path} element={component} key={key} />
  ));
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Menu />}>
            {routeComponents}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
