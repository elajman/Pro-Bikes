import React from 'react'
import ItemCount from './ItemCount'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'

const ItemDetail = ({producto}) => {

  return (
    <div className='detalleProducto'>
      <Card maxW='sm'>
        <CardBody>
          <Image src={producto.imgUrl} alt={producto.nombre} borderRadius='lg'/>
          <Stack mt='6' spacing='3' className='cardContent'>
            <Heading size='xl' color="blue.500">{producto.nombre}</Heading>
            <Text color="green.500">
              Stock: {producto.stock}
            </Text>
            <Text color='blue.500' fontSize='2xl'>
              Precio: u$ {producto.precio}
            </Text>
            <Text color="blackAlpha.500" className='descripcion' fontSize='md' label="Descripcion">
            {producto.descripcion}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup className='detalle-contenedor'>
            <ItemCount/>
            <Button>
              Agregar al Carrito
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ItemDetail