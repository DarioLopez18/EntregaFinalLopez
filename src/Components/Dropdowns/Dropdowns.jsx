import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownItem,DropdownMenu, DropdownToggle } from "reactstrap";
import { useState } from "react";
import "./Dropdowns.css"

const Dropdowns = () => {
  const [dropdown,setDropdown] = useState(false);
  const abrirCerrrarDropdown = () =>{
    setDropdown(!dropdown)
  }
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
            <DropdownItem className="item" >
                NOTEBOOKS
            </DropdownItem>
            <DropdownItem className="item" >
                MOTHERBOARDS
            </DropdownItem >
            <DropdownItem className="item" >
                FUENTES
            </DropdownItem>
            <DropdownItem className="item" >
                MOUSE
            </DropdownItem>
            <DropdownItem className="item" >
                MONITORES
            </DropdownItem>
            <DropdownItem className="item" >
                GPU
            </DropdownItem>
            <DropdownItem className="item" >
                PROCESADORES
            </DropdownItem>
         </DropdownMenu>
       </Dropdown>
    </div>
  )
}

export default Dropdowns

