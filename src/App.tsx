import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import BookInformation from './Components/Pages/BookInformation';
import ShowCategoryBooks from './Components/ShowCategoryBooks/ShowCategoryBooks';
import { CartProvider } from './Data/CartContext';
function App() {
  return (
    <BrowserRouter>
      <CartProvider>

        <div className="App">

          <Routes>
            <Route path="/" element={
              <Main>
                <Nav />



              </Main>
            } />


            <Route path="/book/:id" element={<BookInformation />} />
            <Route path="/category/:mainCategory" element={<ShowCategoryBooks />} />

            <Route path="/category/:mainCategory/:subCategory" element={<ShowCategoryBooks />} />        </Routes>
        </div>
      </CartProvider>

    </BrowserRouter>
  );
}




export default App;