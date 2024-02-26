import PropTypes from "prop-types"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';


const ItemListContainer = ({greeting}) => {
  const [products,setProducts] = useState([]);
  const {categoryName} = useParams();
  useEffect(()=>{
    const db = getFirestore()
    const productsRef = collection(db,"items")
    if(!categoryName) {
      getDocs(productsRef).then(
        snapshot => {
          const productsData = snapshot.docs.map(doc => ({id:doc.id,...doc.data()}))
          setProducts(productsData)
        }
      ) 
    }else{
      const productsFilteredRef = query(collection(db,"items"),where("categoria","==",categoryName))
      getDocs(productsFilteredRef).then(snapshot=>{
        const productsFiltered = snapshot.docs.map(doc => ({id: doc.id,...doc.data()}))
        setProducts(productsFiltered)
      })
    }

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

