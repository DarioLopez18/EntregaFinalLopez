import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownItem,DropdownMenu, DropdownToggle } from "reactstrap";
import { useState, useEffect } from "react";
import "./Dropdowns.css"
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

const Dropdowns = () => {
  const [dropdown,setDropdown] = useState(false);
  const [categories,setCategories] = useState([]);
  const abrirCerrrarDropdown = () =>{
    setDropdown(!dropdown)
  }
  useEffect(()=>{
    const fetchData = async() =>{
      try{
        const response = await fetch("/categories.json")
        const data = await response.json()
        setCategories(data)
      }catch(e){
        console.log(e)
      }
    }
    fetchData()
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
                <Link className="dropdownLink" key={categoria.id} to = {`/category/${categoria.id}`}>
                  <DropdownItem className="item">
                  {categoria.name}
                  </DropdownItem>
                </Link>
              )
            })}

         </DropdownMenu>
       </Dropdown>
    </div>
  )
}

export default Dropdowns

