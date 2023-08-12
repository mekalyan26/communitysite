import logo from './logo.svg';
import './App.css';
import Landing from "./routes/Landing"
import AboutUs from "./routes/AboutUs"
import Gallery from "./routes/Gallery"
import Register from "./routes/Register"
import Events from "./routes/Events"
import { Routes , Route} from 'react-router-dom';



function App() {
  return (

    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/landing" element={<Landing/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  );
}

export default App;
