import React, { PropsWithChildren } from 'react';
import Menu from '../menu/Menu';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="App">
      <Menu />
      {children}
    </div>
  );
};

export default Layout;
