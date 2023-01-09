import React from "react";
import { routes } from "./routes";
import { Routes, Route } from "react-router-dom";
import { IRoute } from "./types";

const Navigation = () => {
  const renderRoute = ({ path, component }: IRoute) => (
    <Route path={path} element={component} key={path} />
  );

  return <Routes>{routes.map(renderRoute)}</Routes>;
};

export default Navigation;
