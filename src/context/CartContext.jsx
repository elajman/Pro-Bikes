import { createContext ,useState, useEffect } from "react"
export const ContextCart = createContext()


const CartContext = ({children}) => {

const [cart, setCart] = useState(() => {
  const savedCart = JSON.parse(localStorage.getItem("cart"));
  return savedCart || []
})

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart))
}, [cart])

const addToCart = (bike) => {

  const bikeInCart = cart.find((item) => item.id === bike.id)
  if (bikeInCart) {
    const updatedCart = cart.map((item) =>
      item.id === bike.id ? { ...item, buyTotal: item.buyTotal + bike.buyTotal} : item
    );
    setCart(updatedCart)
  } else {
    setCart([...cart,bike])
  }
};

  const remuevoDelCarrito = (bikeId) => {
    const newCart = cart.filter((bike) => bike.id !== bikeId)
    setCart(newCart)
  };

  const cartPrecioTotal = ()=>{
    return cart.reduce((total, bike) => total + (bike.price * bike.buyTotal), 0)
  }

  const clearCart= ()=>{
    setCart([])
  }
  

  return (
    <ContextCart.Provider value={{cart, setCart, remuevoDelCarrito, addToCart, clearCart, cartPrecioTotal}}>
      {children}
    </ContextCart.Provider>
  )
}

export default CartContext