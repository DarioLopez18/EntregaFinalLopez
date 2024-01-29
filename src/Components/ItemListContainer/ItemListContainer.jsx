import PropTypes from "prop-types"
import "./ItemListContainer.css"
import { useState,useEffect } from "react";
import Products from "../Products/Products"

const ItemListContainer = (props) => {

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
    <>
    <div className="base3">
        <h1 className="text">{props.greeting}</h1>
    </div>
      <section className='productsContainer'>

      {products.length == 0 ? <span className="loader"></span> : products.map(p=>{
        return(
          <Products key={p.id} title = {p.title} descripcion={p.descripcion} img={p.img} button={p.button}/>
        )})}
      </section>
    </>

  )
}

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
}

export default ItemListContainer

