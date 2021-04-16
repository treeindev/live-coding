import React, { useEffect, useReducer, useState } from 'react';
import Content, { iCountry } from './components/content';
import Header from './components/header';
import Navigation from './components/navigation';
import {API} from './utils/constants';

interface countriesAction {
  type: "add" | "favourite" | "unfavourite";
  data: any;
}

function countriesReducer(countries: Array<iCountry>, action: countriesAction) {
  if (action.type === "add") {
    return action.data;
  }

  return countries.map(country => {
    if (country.Country_text === action.data.Country_text) {
      return {...country, favourite: action.type === "favourite"}
    }
    return country;
  });
}

function App() {
  const [countries, countriesDispatcher] = useReducer(countriesReducer, []);
  const [section, activateSection] = useState<string>("all");

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
        countriesDispatcher({
          type: "add",
          data: countries.map((country: any) => {return {...country, favourite: false}})
        });
      })
  }, [])

  return (
    <div className="App">
      <Header />
      <Navigation section={section} activate={activateSection} />
      <Content section={section} countries={countries} dispatcher={countriesDispatcher} />
    </div>
  );
}

export default App;
