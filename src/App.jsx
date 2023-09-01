import React from 'react';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Routes , Route} from "react-router-dom";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
      {/* <Footer/> */}
    </>
  )
}

export default App
