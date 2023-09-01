import React from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import Header from './components/Header';
import Footer from './components/Footer';
import Basket from "./pages/Basket";
import {Routes , Route} from "react-router-dom";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/basket' element={<Basket/>}/>
      </Routes>
      {/* <Footer/> */}
    </>
  )
}

export default App
