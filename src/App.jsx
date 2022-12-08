import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Error404 from './componentes/Error404';



function App() {
  return (
   <BrowserRouter>
    <Navbar/>
    <br/>
    <Routes>
      <Route path={"/"} element={<ItemListContainer />}/>
      <Route path={"/category/:id"} element={<ItemListContainer />}/>
      <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
      <Route path={"*"} element={<Error404/>}/>

    </Routes>    
   </BrowserRouter>
  );
}

export default App;
