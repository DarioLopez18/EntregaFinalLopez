import './App.css'
import Footer from './Components/Footer/Footer'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Navbar from './Components/Navbar/Navbar'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error from './Components/Error/Error'
import Cart from './Components/Cart/Cart'
import CartProvider from './context/CartContext'
import Checkout from './Components/Checkout/Checkout'

function App() {
  return (
    <>
      <BrowserRouter>
          <CartProvider>
            <Navbar/>
            <Routes>
              <Route path='/' element = {
                  <ItemListContainer greeting='¡Bienvenidos a mi Ecommerce hecha con React JS!'/>
              }/>
              <Route path='/category/:categoryName' element = {
                  <ItemListContainer greeting='¡Bienvenidos a mi Ecommerce hecha con React JS!'/>
              }/>
              <Route path='/item/:id' element = {
                  <ItemDetailContainer/>
              }/>
              <Route path='/cart' element = {
                  <Cart/>
              }/>
              <Route path='/checkout' element = {
                  <Checkout/>
              }/>
              <Route path='*' element = {
                <Error/>
              }/>
            </Routes>
            <Footer/>
          </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
