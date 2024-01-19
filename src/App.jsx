import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting='¡Bienvenidos a mi Ecommerce hecha con React JS!'/>
    </>
  )
}

export default App
