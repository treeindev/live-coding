import React, { useEffect, useState } from 'react';
import Content, { iCountry } from './components/content';
import Header from './components/header';
import Navigation from './components/navigation';
import {API} from './utils/constants';

function App() {
  const [countries, updateCountries] = useState<Array<iCountry>>([]);

  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch(API.URL, {
        method: "GET",
        headers: {
          "x-rapidapi-key": API.KEY,
          "x-rapidapi-host": API.HOST
        }
      });
      return response.json();
    }

    getCountries()
      .then((countries) => {
        updateCountries(countries)
      })
  }, [])

  return (
    <div className="App">
      <Header />
      <Navigation />
      <Content countries={countries} />
    </div>
  );
}

export default App;
