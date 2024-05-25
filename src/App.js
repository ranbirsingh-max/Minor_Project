import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';


import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder.js';
import AboutMe from './components/AboutME.js'
import UploadFood from './components/UploadFood.js';







function App() {
  console.log('App component is rendering');
  return (
    <CartProvider>
      <Router>
    <div >
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/createuser" element={<Signup/>}/>
      <Route exact path="/myOrder" element={<MyOrder/>}/>
      <Route exact path="/about" element={<AboutMe/>}/>
      <Route path="/upload" element={<UploadFood />} />
      
      </Routes>
    </div>
    </Router>
    </CartProvider>
    
  );
}

export default App;
