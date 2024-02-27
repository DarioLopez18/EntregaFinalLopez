import PropTypes from "prop-types"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'


const ItemListContainer = ({greeting}) => {
  const handleAceptarClick = () => {
    setError(null);
    window.location.href="/"
  };
  const Modal = withReactContent(Swal);
  const [products,setProducts] = useState([]);
  const [error,setError] = useState(null)
  const {categoryName} = useParams();
  useEffect(()=>{
    const db = getFirestore()
    const productsRef = query(collection(db,"items"),where("stock",">",0))
    if(!categoryName) {
      getDocs(productsRef).then(
        (snapshot) => {
          if(!snapshot.empty){
            const productsData = snapshot.docs.map(doc => ({id:doc.id,...doc.data()}))
            setProducts(productsData)
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
        }else{
          setError("No se pudieron encontrar productos para esta categoria,yendo a los productos")
        }
      })
    }
    },[categoryName])
  return (
    <>
    <div className="base3 marginbottom">
        <h1 className="text">{greeting}</h1>
        <ItemList products = {products}/>
        {error && 
        Modal.fire({
          title: "Error",
          text: error,
          icon: "error",
          confirmButtonText: 'Aceptar',
          allowOutsideClick: false
        }).then((result)=>{
          setError(null)
          if(result.isConfirmed){
            handleAceptarClick()
          }
        })
      }
    </div>
    </>

  )
}

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
}

export default ItemListContainer

