import './App.css';
import Home from './Components/Pages/Home';
import FullStack from './Components/Pages/FullStack';
import DataSci from './Components/Pages/DataSci';
import CyberSec from './Components/Pages/CyberSec';
import Career from './Components/Pages/Career';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/full-stack-development" Component={FullStack} />
        <Route path="/data-science" Component={DataSci} />
        <Route path="/cyber-security" Component={CyberSec} />
        <Route path="/career" Component={Career} />
        </Routes>
    </div>
  );
}

export default App;
