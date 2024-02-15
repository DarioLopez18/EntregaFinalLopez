import { useState,createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) =>{
    const [cart,setCart] = useState([])
    const [total,setTotal] = useState(0)
    const [totalQuantity,setTotalQuantity] = useState(0)

    const productExist = (product,quantity) =>{
        const productExist = cart.find(p=>p.product.id == product.id)
        if(!productExist){
            cart.push({product,quantity})
        }else{
            productExist.quantity += quantity;
        }
    }

    const addToCart = (product,quantity) =>{
        productExist(product,quantity)
        setTotalQuantity(quantity)
    }

    const deleteItem = () => {

    }

    const clearCart = () => {

    }

    const quantityCart = () => {

    }

    const cartTotal = () => {

    }

    return(
        <CartContext.Provider value={
           {
            cart,
            total,
            totalQuantity,
            addToCart,
            deleteItem,
            clearCart,
            quantityCart,
            cartTotal
           }
        }>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider