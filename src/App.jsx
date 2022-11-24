import React from 'react';
import './App.css';
import Navbar from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';


function App() {
  return (
   <div className="container">
    <Navbar/>
    <br/>
    <ItemListContainer greeting={"Bienvenidos a Nutri-Salud donde podes encontrar toda la variedad de frutos secos, cereales, legumbre y especias"}/>

   </div>
  );
}

export default App;
