import Item from './Item'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'



const ItemList = ({data}) => {
  return (
    <>
    <Container fluid >
    <Row >
    {data.map((bike) => (
    <Item
    key={bike.id}
    id={bike.id}
    title={bike.title}
    description={bike.description}
    price={bike.price}
    stock={bike.stock}
    category={bike.category}
    image={bike.image}
    oferta={bike.oferta}
    />
    ))}
    </Row>
    </Container>
    </>
  );
};

export default ItemList