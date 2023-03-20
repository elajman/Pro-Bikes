import React from 'react'
import { Link } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'

const LogoNav = () => {
  return (
    <div className='logonavbar'>
        <Flex>
        <Link to={"/"}> 
          <img src="../public/logo.png" alt="logo"  />
        
        </Link>
    </Flex>
    </div>
  )
}

export default LogoNav


