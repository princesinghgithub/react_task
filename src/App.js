import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import AddUser from './Components/AddUser'
import EditUser from './Components/EditUser'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalProvider } from './Context/GlobalState';
import './App.css';
function App() {
  return (
    <> <Navbar />
    <div style={{ maxWidth: "40rem ", margin: "4rem auto" }}>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/add" element={<AddUser />} />
            <Route path="/edit/:id" element={<EditUser />} />
          </Routes>
        </BrowserRouter>
        </GlobalProvider>
      
    </div></>
  );
}

export default App;
