import { useState,useEffect } from "react";
import Item from "../Item/Item";
import "./ItemList.css"

const ItemList = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        const fetchData = async() =>{
          try{
            const response = await fetch("./products.json")
            const data = await response.json()
            setTimeout(()=>{
              setProducts(data)
            },2000)
          }catch(e){
            console.log(e)
          }
        }
        fetchData()
      },[])
  return (
    <section className='productsContainer'>
    {products.length == 0 ? <div className="divLoader"><h1>Cargando los productos...</h1> <span className="loader"></span></div>: products.map(p=>{
      return(
        <Item key={p.id} title = {p.title} descripcion={p.descripcion} img={p.img} button={p.button}/>
      )})}
    </section>
  )
}

export default ItemList
