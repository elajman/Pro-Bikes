import Badge from 'react-bootstrap/Badge'
import { ContextCart } from '../context/CartContext'
import { useContext } from 'react'

const CartWidget = () => {
    const{cart, setcart} = useContext(ContextCart)

    const loteTotal = cart.reduce((total, bike) => total + bike.buyTotal, 0)

    return (
        <div>
            <span className="material-symbols-outlined">
        shopping_cart
        </span>
        {loteTotal > 0 && (
        <Badge>{loteTotal}</Badge>
        )}
        </div>
    )
}

export default CartWidget