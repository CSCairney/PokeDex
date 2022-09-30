import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import PokeDex from './Pages/PokeDex';
const backgroundColor = {backgroundColor: '#54587c'};  

function App() {
  return (
    <>
    <div style={backgroundColor}>
    <Router>
      <Pokemonnavbar/>
      <Routes>
        <Route path="/Home" element= {<Home/>}/>
        <Route path="/PokeDex" element= {<PokeDex/>}/>
        <Route path="/Wiki" element= {<Wiki/>}/>
        <Route path="/Community" element= {<Community/>}/>
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
