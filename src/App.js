import './App.css';
import {Route , Routes} from "react-router-dom";
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home'
import MoviesList from './Components/MoviesList'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/trending" element={<MoviesList />} /> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
