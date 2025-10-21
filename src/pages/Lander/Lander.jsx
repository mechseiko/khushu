import React from 'react';
import Hero from './Hero';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import Container from '../../components/Container';

function Lander() {
  return (
    <div>
      <PageLayout>
        <Container>
          <Hero />
        </Container>
      </PageLayout>
    </div>
  );
}

export default Lander;
