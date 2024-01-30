import './App.css'
import Footer from './Components/Footer/Footer'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Navbar from './Components/Navbar/Navbar'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'


function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting='¡Bienvenidos a mi Ecommerce hecha con React JS!'/>
      <Footer/>
      <ItemDetailContainer id={1}/>
    </>
  )
}

export default App
