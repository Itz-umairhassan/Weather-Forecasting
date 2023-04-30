import logo from './logo.svg';
import './App.css';
import Navbar from './Modules/Navbar';
import SearchContext from './contexts/SearchContext';
import Home from './Modules/Home';
import Card from './Modules/Card';

function App() {
  return (
    <SearchContext>
      <Navbar />
      <Home/>
    </SearchContext>
  );
}

export default App;
