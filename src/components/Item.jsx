import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {

  return (

    <Card maxW='xs' className='tarjeta'>
      <CardBody>
        <Image src={producto.imgUrl} alt={producto.nombre} />
        <Stack mt='8' spacing='s' className='cardContent'>
          <Heading size='md'>{producto.nombre}</Heading>
          <Text color="gray.600">Stock:{producto.stock}</Text>
          <Text color='red' fontSize='2xl'>
            Precio u$ {producto.precio}
          </Text>
          <Link to={`/producto/${producto.id}`}>
        <Button colorScheme='blue'>Detalle</Button>
        </Link>
        </Stack>
      </CardBody>
    </Card>
  
  )
}

export default Item