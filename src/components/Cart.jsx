import Loading from './Loading'
import { useContext } from 'react'
import {Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { CartDataContext } from '../context/CartContext'
import OrderForm from './Formulario'

const Cart = () => {
  const { cart, removeFromCart, cartPriceTotal } = useContext(CartDataContext)
  return (
    <div>
      {cart.length !== 0 ? (
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Table responsive hover style={{ boxSizing: 'inherit', textAlign: 'left', marginTop:'3rem' }}>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Sub-Total</th>
          </tr>
        </thead>
        <tbody style={{ verticalAlign: 'middle' }}>
          {cart.map((game) => (
            <tr key={game.id}>
              <td>
                <Button variant="outline-danger" onClick={() => removeFromCart (game.id)} >
                <span className="material-symbols-outlined" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                  delete
                </span>
                </Button>
              </td>
              <td><img src={game.image} alt="" style={{ width: '6rem' }} /> </td>
              <td>{game.title}</td>
              <td>${game.price}</td>
              <td>{game.buyTotal}</td>
              <td>${game.buyTotal * game.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
      <Table responsive hover style={{width:'36rem'}}>
        <thead >
          <tr >
            <th colSpan={4}>Total De Compras</th>
          </tr>
        </thead>
        <tbody >
          <tr >
          <th>Total</th>
          <td>${cartPriceTotal()}</td>
          <td></td>
          <td></td>
          </tr>
        </tbody>
      </Table>
      </div>

      <OrderForm/>

      </div>
            ):(
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop:'2rem'}}>
                <h3>El Carrito Esta Vacio</h3>
                <Button variant="outline-primary" size="lg" as={Link} to="/">Volver a Productos</Button>
              </div>
            )}
    </div>

  );
};


export default Cart