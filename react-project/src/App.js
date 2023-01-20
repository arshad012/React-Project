import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <HomePage/> */}
      <AllRoutes/>
    </div>
  );
}

export default App;
