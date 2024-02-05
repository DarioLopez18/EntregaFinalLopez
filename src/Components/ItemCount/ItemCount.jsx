import "./ItemCount.css"
import PropTypes from "prop-types"
import Button from "../Button/Button"
import {useContador} from "../../Hooks/useContador/useContador"

const ItemCount = ({stock}) => {
  const {count,increment,decrement,reset} = useContador(1,stock,1);
  return (
    <>
    <div className="containerCarts">
      <div className="buttonsCart">
        <div className="divItemCount">
        <button className="buttonItemCount" onClick={decrement}>
          -
        </button>
        </div>
        <p className="count">{count}</p>
        <div className="divItemCount"> 
        <button className="buttonItemCount" onClick={increment}>
          +
        </button>
          </div>
      </div>
      <div className="divAddToCart"> 
          <Button detail={"Agregar al carrito"} onClick={reset} className="buttonAddToCart"/>
      </div>
    </div>

    </>

  )
}

ItemCount.propTypes = {
  stock: PropTypes.number.isRequired
}
export default ItemCount
