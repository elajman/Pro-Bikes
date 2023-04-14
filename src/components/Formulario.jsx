import React, { useState } from 'react'
import {collection,addDoc, getFirestore, serverTimestamp} from "firebase/firestore"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Popover from 'react-bootstrap/Popover'
import { ContextCart } from '../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const OrderForm = () => {
  const {cart, cartPrecioTotal, clearCart} = useContext(ContextCart)
  const [show, setShow] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const [name , SetName] = useState ("")
  const [email , SetEmail] = useState ("")
  const [phone , SetPhone] = useState ("")
  const [address , SetAddress] = useState ("")
  const [lastName , SetLastName] = useState ("");
  const [confirmarEmail, setConfirmarEmail] = useState("")
  const [showPopover, setShowPopover] = useState(true)
  const db = getFirestore()

  const handleSubmit=(e)=>{
    e.preventDefault()
    if (email !== confirmarEmail) {
      setShowPopover(false);
      return
    }
    else if (email === '' || confirmarEmail === '') {
      setShowPopover(false);
      return
    }

    addDoc(orderCollection, order).then (({id})=>setOrderId(id))
    handleShow()
  };

  const order={
    name,
    email,
    phone,
    lastName,
    address,
    cart:({cart}),
    total:cartPrecioTotal(),
    date:serverTimestamp(),
  };

const orderCollection = collection(db, "order")
const handleClose = () => setShow(false)
const handleShow = () => setShow(true)

  return (
    <>
    <div className='form-return'>
          <Form style={{width:'20rem',}} onSubmit={(e) => {
  handleSubmit(e);
}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" onChange={(e)=>SetEmail(e.target.value)} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirmEmail">
            <Form.Label>Confirmar Correo:</Form.Label>
            <Form.Control type="email"  onChange={(e) => setConfirmarEmail(e.target.value)} />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nombre:</Form.Label>
        <Form.Control type="text"  onChange={(e)=>SetName(e.target.value)} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Apellido:</Form.Label>
        <Form.Control type="text"  onChange={(e)=>SetLastName(e.target.value)} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Telefono:</Form.Label>
        <Form.Control type="number"  onChange={(e)=>SetPhone(e.target.value)} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Direccion:</Form.Label>
        <Form.Control type="text"  onChange={(e)=>SetAddress(e.target.value)} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Modal show={show} onHide={() => {
  handleClose()
  clearCart()
}} backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Compra Exitosa</Modal.Title>
        </Modal.Header>
        <Modal.Body>Total de su compra es :<strong>${cartPrecioTotal()}</strong>
        </Modal.Body>
        <Modal.Body>El ID de su compra es:<strong>{orderId}</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={() => {
  handleClose()
  clearCart()
}} as={Link} to="/">
            Volver a Productos
          </Button>
        </Modal.Footer>
      </Modal>

      <Button variant="outline-primary" type="submit" >
        Comprar
      </Button>

      <Popover show={showPopover}  placement="bottom">
        <Popover.Body>
          El correo no coincide o no se ingreso.
        </Popover.Body>
      </Popover>
    </Form>
    </div>
    </>
  )
}

export default OrderForm