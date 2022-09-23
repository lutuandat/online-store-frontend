import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer/footer';
import Header from './header/Header';

export default class Layout extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  }
}
