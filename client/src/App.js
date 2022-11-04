import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cinemanavbar from "./component/Cinemanavbar/cinemanavbar";
import Home from './Pages/home';
import './App.css'
const backgroundColor = {backgroundColor: '#54587c'};  

function App() {
  return (
    <>
    <div style={backgroundColor}>
    <Router>
      <Pokemonnavbar/>
      <Routes>
        <Route path="/Home" element= {<Home/>}/>
                
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
