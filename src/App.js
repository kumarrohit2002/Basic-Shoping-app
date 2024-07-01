import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';


function App() {
  return (
    <div className="">
      <div>
        <Navbar/>
     
      </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Cart' element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
