//import logo from './logo.svg';
import './App.css';
import Clients from './routes/Clients'
import Navbar from './components/Navbar';
import  {Route, Routes} from "react-router-dom";
import Home from './routes/Home';
import OurWolves from './routes/OurWolves';
//import Clients from './routes/Clients';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/clients" element={<Clients/>}/>
        <Route path="/wolves" element={<OurWolves/>}/>
      </Routes>
      
      
        
    </div>
  );
}

