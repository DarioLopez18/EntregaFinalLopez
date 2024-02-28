import PropTypes from "prop-types"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { Link } from "react-router-dom";
import Search from "../Search/Search";

const ItemListContainer = ({greeting}) => {
  const handleClickError = () => {
    setError(null)
  }
  const [products,setProducts] = useState([]);
  const [error,setError] = useState(null)
  const {categoryName} = useParams();
  const [category,setCategory] = useState(false)
  const [productsCopy,setProductsCopy] = useState(null) 
  const productSearch = async() =>{
    const db = getFirestore()
    const productsRef = query(collection(db,"items"),where("stock",">",0))
    getDocs(productsRef).then(
        (snapshot) => {
          if(!snapshot.empty){
            const productsData = snapshot.docs.map(doc => ({id:doc.id,...doc.data()}))
            setProductsCopy(productsData)
          }else{
            setError("No se pudieron traer los productos,intente nuevamente")
        }
      }
    ) 
  }

  const productList = async() =>{
    const db = getFirestore()
    const productsRef = query(collection(db,"items"),where("stock",">",0))
    if(!categoryName) {
      getDocs(productsRef).then(
        (snapshot) => {
          if(!snapshot.empty){
            const productsData = snapshot.docs.map(doc => ({id:doc.id,...doc.data()}))
            setProducts(productsData)
            setCategory(false)
            setError(null)
          }else{
            setError("No se pudieron traer los productos,intente nuevamente")
          }
        }
      ) 
    }else{
      const productsFilteredRef = query(collection(db,"items"),where("categoria","==",categoryName),where("stock",">",0))
      getDocs(productsFilteredRef).then(snapshot=>{
        const productsFiltered = snapshot.docs.map(doc => ({id: doc.id,...doc.data()}))
        if(productsFiltered.length > 0){
          setProducts(productsFiltered)
          setCategory(true)
          setError(null)
        }else{
          setError("No se pudieron encontrar productos para esta categoria")
        }
      })
    }
  }
  useEffect(()=>{
    productList()  
    productSearch()  
  },[categoryName])


  const handleSearch = (searchTerm) => {
    if(searchTerm.length == 0){
      setError("No hay coincidencias")
    }else{
      setProducts(searchTerm)
    }
  };
  return (
    <>
    {error ? 
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <h1 className="text marginbottom">Error: {error}</h1>
      <Link className="buttonError" style={{textDecoration:'none'}} to={'/'} onClick={handleClickError}> 
        Ir a los productos
      </Link>
    </div> 
    : 
    <div className="base3 marginbottom">
        <div className="base2">
            <Search placeholder="Buscar producto" productsCopy={productsCopy} onSearch={handleSearch}/>
        </div>
        <h1 className="text">{greeting}</h1>
        <ItemList products = {products} category = {category}/>
    </div>
    }
    </>
  )
}

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
}

export default ItemListContainer
