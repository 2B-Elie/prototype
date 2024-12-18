import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/Hero';
import Features from './components/Features';
import LiveMatches from './components/home/LiveMatches';
import News from './components/home/News';

function App() {
  return (
    <Layout>
      <Hero />
      <Features />
      <LiveMatches />
      <News />
    </Layout>
  );
}

export default App;