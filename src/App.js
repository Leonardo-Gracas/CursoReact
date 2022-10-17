import React, { useState } from 'react';
import RoutesApp from './pages/RoutesApp';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';



export default props => {

  return (
    <div className="App">
      <ToastContainer autoClose={3000}/>
      <RoutesApp></RoutesApp>
    </div>
  )
}
