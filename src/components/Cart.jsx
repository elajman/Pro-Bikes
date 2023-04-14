import Loading from './Loading'
import { useContext } from 'react'
import {Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { ContextCart } from '../context/CartContext'
import OrderForm from './Formulario'

const Cart = () => {
  const { cart, remuevoDelCarrito, cartPrecioTotal } = useContext(ContextCart)
  return (
    <div>
      {cart.length !== 0 ? (
      <div>
        <div className='carrito'>
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
          {cart.map((bike) => (
            <tr key={bike.id}>
              <td>
                <Button variant="outline-danger" onClick={() => remuevoDelCarrito (bike.id)} >
                <span className="material-symbols-outlined">
                  delete
                </span>
                </Button>
              </td>
              <td><img src={bike.image} alt="" style={{ width: '6rem' }} /> </td>
              <td>{bike.title}</td>
              <td>${bike.price}</td>
              <td>{bike.buyTotal}</td>
              <td>${bike.buyTotal * bike.price}</td>
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
          <td>${cartPrecioTotal()}</td>
          <td></td>
          <td></td>
          </tr>
        </tbody>
      </Table>
      </div>

      <OrderForm/>

      </div>
            ):(
              <div className='carrito-vacio'>
                <h3>El Carrito Esta Vacio</h3>
                <Button variant="outline-primary" size="lg" as={Link} to="/">Volver a Productos</Button>
              </div>
            )}
    </div>

  );
};


export default Cart