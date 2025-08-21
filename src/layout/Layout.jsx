import React from 'react';
import { Outlet } from 'react-router-dom';
import TarotNav from '../components/TarotNav';
import TarotFooter from '../components/TarotFooter';

const Layout = () => {
  return (
    <>
      <TarotNav />
      <main>
        <Outlet />
      </main>
      <TarotFooter />
    </>
  );
};

export default Layout;