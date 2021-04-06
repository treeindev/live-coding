import React from 'react';
import Content from './components/content';
import Header from './components/header';
import Navigation from './components/navigation';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Content />
    </div>
  );
}

export default App;
