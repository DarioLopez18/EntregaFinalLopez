import PropTypes from "prop-types"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useState,useEffect} from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
  const [products,setProducts] = useState([]);
  const {categoryName} = useParams();
  useEffect(()=>{
      const fetchData = async() =>{
        try{
          const response = await fetch("/products.json")
          const data = await response.json()
          if(categoryName == undefined){
            setProducts(data)
          }else{
            const productsFiltered = data.filter(p=>p.categoria.name == categoryName)
            setProducts(productsFiltered)
          }
        }catch(e){
          console.log(e)
        }
      }
      fetchData()
    },[categoryName])
  return (
    <>
    <div className="base3 marginbottom">
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

