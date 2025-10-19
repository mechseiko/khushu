import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Container from '../../components/Container';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <Container>
        <main className="*:py-[18px]">{children}</main>
      </Container>
      <Footer />
    </div>
  );
}

export default Layout;
