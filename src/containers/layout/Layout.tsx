import React, { PropsWithChildren } from 'react';
import Menu from '../menu/Menu';

const Layout = ({ children }: PropsWithChildren) => {
  const url = window.location.href.split('/').reverse()[0];
  if (url == 'login') {
    return <div className="App">{children}</div>;
  }
  return (
    <div className="App">
      <Menu />
      {children}
    </div>
  );
};

export default Layout;
