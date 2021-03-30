import React from 'react';
import Content from './components/content';
import Navigation from './components/navigation';
import SearchBar from './components/search_bar';

function App() {
  return (
    <div className="bg-red-600 p-20 min-h-screen">
      <div className="flex bg-white rounded-lg overflow-hidden shadow-2xl">
        <Navigation></Navigation>
        <div className="flex-grow">
          <SearchBar></SearchBar>
          <Content></Content>
        </div>
      </div>
    </div>
  );
}

export default App;
