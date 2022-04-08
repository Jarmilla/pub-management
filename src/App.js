import './App.css';
import SearchSection from "./components/SearchSection"
import Beer from './components/Beer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Grillby's bar</h1>
        <h2>Stock list</h2>
      </header>
      <main>
        <SearchSection />
        <Beer />
         {/* map through */}
       
      </main>
      
    </div>
  );
}

export default App;
