import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownItem,DropdownMenu, DropdownToggle } from "reactstrap";
import { useState, useEffect } from "react";
import "./Dropdowns.css"
import Loader from "../Loader/Loader";
import {NavLink} from "react-router-dom";
import {collection,getDocs,getFirestore} from "firebase/firestore"

const Dropdowns = () => {
  const [dropdown,setDropdown] = useState(false);
  const [categories,setCategories] = useState([]);
  const abrirCerrrarDropdown = () =>{
    setDropdown(!dropdown)
  }
  useEffect(()=>{
    const db = getFirestore();
    const categoriesRef = collection(db,"categories")
    getDocs(categoriesRef).then((snapshot)=>{
      const categoriesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCategories(categoriesData)
    })
  },[])
  return (
    <div>
       <Dropdown className="text" isOpen={dropdown} toggle={abrirCerrrarDropdown}>
         <DropdownToggle className="dropdown" caret>
            Categorías
         </DropdownToggle>
         <DropdownMenu>
            <DropdownItem disabled>
                Seleccione una
            </DropdownItem>
            {categories.length == 0 ? <Loader text="Cargando categorias..."/> : categories.map(categoria=>{
              return(
                <NavLink className="dropdownLink" key={categoria.id} to = {`/category/${categoria.name}`}>
                  <DropdownItem className="item">
                  {categoria.name}
                  </DropdownItem>
                </NavLink>
              )
            })}

         </DropdownMenu>
       </Dropdown>
    </div>
  )
}

export default Dropdowns

