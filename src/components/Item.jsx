import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'


const Item = ({ id , title, price, category, image }) => {
  
  return (
    <>
    <Card className="text-center"  style={{ width: '18rem', margin:'3rem', paddingTop:'1rem' }} key={id}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title><h6>Marca:</h6> {title}</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Categoria: {category}</ListGroup.Item>
          <ListGroup.Item>Precio: <strong>${price}</strong></ListGroup.Item>
        </ListGroup>
        <Link to={`/itemdetail/${id}`}>
          <Button variant="outline-danger"> Detalles</Button>
        </Link>
      </Card.Body>
    </Card>
    </>
  )
}

export default Item