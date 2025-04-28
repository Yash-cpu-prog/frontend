import './App.css';
import LoginSignup from './pages/LoginSignup';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import  ShopCategory  from './pages/ShopCategory';
import  Product  from './pages/Product';
import  Cart  from './pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Asset/banner_mens.png'
import women_banner from './Components/Asset/banner_women.png' // or .jpeg
import kid_banner from './Components/Asset/banner_kids.png'
import Cartitems from './Components/Cartitems/Cartitems';





function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="mens" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="womens" />} />
          <Route path='/kids' element={<ShopCategory  banner={kid_banner} category="kids" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

