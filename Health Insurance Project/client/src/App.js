import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import './App.css';
import Navbar from "./Components/Navbar/navbar"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <AllRoutes/>
      </Router>
      
    </div>
  );
}

export default App;
