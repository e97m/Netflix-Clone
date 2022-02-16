import './App.css';
import {Route , Routes} from "react-router-dom";
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home'
import FavList from './Components/FavList'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/favorite" element={<FavList />} /> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
