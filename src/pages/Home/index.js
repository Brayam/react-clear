import React from 'react';
import SEO from '../../components/core/Seo';

import './styles.scss'

function Home() {
  return (
    <div className="App">
      <SEO
        title="React - Hello World!"
        metaRobots="noindex, nofollow"
      />

      <h1>HELLO WORLD!</h1>
      <br /><br />
      <small>🔥 <a href="https://instagram.com/brayam.henrik" target="_blank" rel="noreferrer">by @Brayam.Henrik</a> 🔥</small>
    </div>
  );
}

export default Home;



