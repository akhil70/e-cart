import React, { useState, createContext } from 'react';
import "./App.css";
import data from './components/back/data/Data';
import Header from './components/front/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/front/Header/products/Products';
import Signup from './components/front/signup/Signup';
import Cart from './components/front/cart/cart';
import Qrcodegenerator from './QR_CODE_GENERATOR/Qrcode_generator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Mycontext = React.createContext();
const MyCart = React.createContext();



function App() {

  const [CartItems, setCartItems] = useState([]);
  const ProductItems = data;
  console.log("dataaaaaaaaaaaaa", ProductItems);
  console.log("CartItems", CartItems);

  const handleAddToCart = (product) => {
    // Add the item to the cart
    console.log("product added to cart");
    // setCartItems((prevCartItems) => [...prevCartItems, item]);
    const ProductExist = CartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      // setCartItems(CartItems.map((item) => item.id === product.id ?
      //   { ...ProductExist, quantity: ProductExist.quantity + 1 } : item))
      toast.error("Product Already Added to the Cart");
    }
    else {
      setCartItems([...CartItems, { ...product, quantity: 1 }])
    }
  };

  const HandleAddCount = (product) => {
    const ProductExist = CartItems.find((item) => item.id === product.id);
    setCartItems(CartItems.map((item) => item.id === product.id ?
      { ...ProductExist, quantity: ProductExist.quantity + 1 } : item))

  }

  const handleRemoveProduct = (product) => {
    const ProductExist = CartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(CartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        CartItems.map((item) => item.id === product.id ? { ...ProductExist, quantity: ProductExist.quantity - 1 } : item)
      )
    }
  }
  const handleCartClear = () => {
    setCartItems([]);
  }

  return (
    <div>
      <ToastContainer />
      <MyCart.Provider value={CartItems}>
        <Mycontext.Provider value={data}>
          <Router>
            <Header cartItems={CartItems} />
            <Routes>
              <Route path="/" element={<Products handleAddToCart={handleAddToCart} />}>
              </Route>
              <Route path="/Signup" element={<Signup />}>
              </Route>
              <Route path="/Cart" element={<Cart handleAddToCart={handleAddToCart} handleRemoveProduct={handleRemoveProduct} handleCartClear={handleCartClear} HandleAddCount={HandleAddCount} />}>
              </Route>
              <Route path="/QrCodeGenerator" element={<Qrcodegenerator />}>
              </Route>
            </Routes>
          </Router>
        </Mycontext.Provider>
      </MyCart.Provider>
    </div>

  )
}

export default App
export { Mycontext, MyCart };
