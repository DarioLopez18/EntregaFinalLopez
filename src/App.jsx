import './App.css'
import Footer from './Components/Footer/Footer'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Navbar from './Components/Navbar/Navbar'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
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
              <></>
          }/>
          <Route path='/checkout' element = {
              <></>
          }/>
          <Route path='*' element = {
            <></>
          }/>
        </Routes>
        <Footer/>

      </BrowserRouter>
    </>
  )
}

export default App
