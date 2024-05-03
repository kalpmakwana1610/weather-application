import logo from './logo.svg';
import './App.css';
import Weatherhome from './Components/Weatherhome';
// import Result from './Components/Result';
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
  <Routes>
    <Route path="/" element={<Weatherhome />} />
    {/* <Route path="/result" element={<Result />} />t */}
  </Routes>
 </BrowserRouter>
 
    </div>
  );
}

export default App;
