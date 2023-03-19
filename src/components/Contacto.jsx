import React from 'react'
import { FormControl, FormLabel, FormHelperText, Input, Button, Flex, Box} from '@chakra-ui/react'

const Contacto = () => {
  return (
    <div className='form-contacto'>
    <Flex alignItems="center" gap="2">
    <FormControl>
      <FormLabel>Contacto</FormLabel>
      <Input type='email' placeholder='Ingrese su Correo'/>
      <Input type='textarea' placeholder='Dejenos su Mensaje' />
      <FormHelperText>No compartiremos su informacion.</FormHelperText>
      <Button className='boton-contacto' variant="solid" colorScheme="blue">Enviar</Button> 
    </FormControl>
  </Flex>
    </div>
  )
}

export default Contacto