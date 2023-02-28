import './App.css';
import Navbar from './components/layouts/component/Navbar';
import SelectRole from './components/layouts/component/selectRole';
import Signup from './components/layouts/auth/signup'
import Login from './components/layouts/auth/login'
import Home from './components/layouts/home/Home'
import ProductDetails from './components/layouts/productDetails/productDetails';
import AddProduct from './components/layouts/home/products/addProduct';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/product/:id" element={<ProductDetails/>} />
      <Route exact path="/addProduct" element={<AddProduct/>} />
      <Route exact path="/signup" element={<SelectRole/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/Signup/seller" element={<Signup/>} />
      <Route exact path="/Signup/buyer" element={<Signup/>} />
      </Routes>
    </Router>
  )
}

export default App;
