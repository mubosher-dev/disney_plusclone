import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import CartoonCapture from './components/CartoonCapture/CartoonCapture'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={"/cartoon"} element={<CartoonCapture />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
