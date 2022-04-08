import React, {useState, useEffect} from 'react';
import './App.css';
import {beersJSON} from "./data"
import SearchSection from "./components/SearchSection"
import Beer from './components/Beer';

function App() {
  const beerURL = "https://challenge.codingsans.com/beers.json"
  const [beers, setBeers] = useState(null)
  
  useEffect(() => {
    fetch(beerURL)
      .then((req) => req.json())
      .then((data) => setBeers(data))
      .catch(() => setBeers(beersJSON))
      .catch((err) => console.log(`Error: ${err}`))
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Grillby's bar</h1>
        <h2>Stock list</h2>
      </header>
      <main>
        <SearchSection />
       
        {beers !== null ? 
        beers.map(beer => <Beer beer={beer} key={beer.id} />) : ""}
       
      </main>
    </div>
  );
}

export default App;
