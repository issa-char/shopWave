//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import CheckOutPage from './pages/CheckoutPage';


function App() {
  return (
    <Router>
      <Header />
      <Footer>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={CartPage} />
        <Route path="/checkout" component={CheckOutPage} />
      </Routes>
      </Footer>
    </Router>
  );
}

export default App;
