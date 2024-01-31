import PropTypes from "prop-types"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useState,useEffect } from "react";

const ItemListContainer = ({greeting}) => {
  const [products,setProducts] = useState([]);
  useEffect(()=>{
      const fetchData = async() =>{
        try{
          const response = await fetch("./products.json")
          const data = await response.json()
          setTimeout(()=>{
            setProducts(data)
          },1000)
        }catch(e){
          console.log(e)
        }
      }
      fetchData()
    },[])
  return (
    <>
    <div className="base3">
        <h1 className="text">{greeting}</h1>
        <ItemList products = {products}/>
    </div>
    </>

  )
}

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
}

export default ItemListContainer

