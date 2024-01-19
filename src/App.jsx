import './App.css'
import Footer from './Components/Footer/Footer'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Navbar from './Components/Navbar/Navbar'
import Products from './Components/Products/Products'



function App() {

  const products = [
    {
      id:1,
      title:"Fuente de alimentacion",
      img:"https://acortar.link/O101XI",
      descripcion:"Fuente Corsair 550W 80 Plus Bronze",
      button: "Ver mas"
    },
    {
      id:2,
      title:"Notebook Gamer",
      img:"https://acortar.link/SLS5hS",
      descripcion:"Notebook Gamer Acer Nitro 5 15.6",
      button: "Ver mas"
    }
    ,    {
      id:3,
      title:"Procesador",
      img:"https://acortar.link/dPclDN",
      descripcion:"Procesador AMD Ryzen 9 5950X 4.9GHz",
      button: "Ver mas"
    }
    ,    {
      id:4,
      title:"Gabinete",
      img:"https://acortar.link/BmqxdQ",
      descripcion:"Gabinete Kolink Inspire K3 RGB  M-ATX",
      button: "Ver mas"
    }
    ,    {
      id:5,
      title:"Silla Gamer",
      img:"https://acortar.link/9sge4g",
      descripcion:"Silla Gamer Vertagear Racing Series",
      button: "Ver mas"
    }
    ,{
      id:6,
      title:"Mother",
      img:"https://acortar.link/IyArrf",
      descripcion:"Mother Asrock X670E Taichi Carrara",
      button: "Ver mas"
    },
    {
      id:7,
      title:"SSD M.2",
      img:"https://acortar.link/jygvaU",
      descripcion:"Disco Solido SSD M.2 Team 2TB",
      button: "Ver mas"
    },
    {
      id:8,
      title:"Memoria Ram",
      img:"https://acortar.link/HgeG0G",
      descripcion:"Memoria GeiL DDR4 16GB 3000MHz",
      button: "Ver mas"
    },
    {
      id:9,
      title:"Cable HDMI",
      img:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_19689_Cable_HDMI_Nisuta_20m_Dorado_V1.4_con_Filtros_2160P_4K_x_2K_4af7cdc5-grn.jpg",
      descripcion:"Cable hdmi alta velocidad",
      button: "Ver mas"
    }    
  ]

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting='¡Bienvenidos a mi Ecommerce hecha con React JS!'/>
      <section className='productsContainer'>
      {products.map(p=>{
        return(
          <Products key={p.id} title = {p.title} descripcion={p.descripcion} img={p.img} button={p.button}/>
        )
      })}
      </section>
      <Footer/>
    </>
  )
}

export default App
