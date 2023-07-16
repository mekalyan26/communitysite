import logo from './logo.svg';
import './App.css';
import Landing from "./routes/Landing"
import AboutUs from "./routes/AboutUs"
import Login from "./routes/Login"
import Register from "./routes/Register"
import { Routes , Route} from 'react-router-dom';


function App() {
  return (

    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/gallery" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default App;
