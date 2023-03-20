import React from 'react'
import CartWidget from './CartWidget'
import LogoNav from './LogoNav'
import { Flex, Box, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
         <div className='navegacion'>
      <Flex>
      <LogoNav />  
        <Link to={"/ItemDetailContainer"}>
        <Button colorScheme='blue'>Quienes Somos</Button>  
        </Link>
        <Link to={"/contacto"}>
        <Button colorScheme='blue'>Contacto</Button>
        </Link>
        <Link to={"/"}>
         <Button colorScheme='blue'>Inicio</Button> 
        </Link>
        
        <Menu>
            <MenuButton as={Button}>Productos</MenuButton>
            <MenuList>
                <Link to={'/categoria/Hard Tail'}><MenuItem>Rigidas</MenuItem></Link>
                <Link to={`/categoria/Full Suspension`}><MenuItem>Full Suspension</MenuItem></Link>
            </MenuList>
        </Menu>
        <Box>
            <CartWidget />
        </Box>
     </Flex>
    </div>
   
    )
}

export default NavBar
