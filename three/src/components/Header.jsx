import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <HStack p={'4'} shadow={'base'} bgColor={'blackAlpha.400'} justifyContent={'center'} >

      <Button variant={'ghost'} color={'black'} _hover={'gray.100'} mx={'8'}>
        <Link to={'/'}>Home</Link>
      </Button>

      <Button variant={'ghost'} color={'black'} _hover={'gray.100'} mx={'8'}>
        <Link to={'/exchanges'}>Exchanges</Link>
      </Button>
      
      <Button variant={'ghost'} color={'black'} _hover={'gray.100'} mx={'8'}>
        <Link to={'/coins'}>Coins</Link>
      </Button>

    </HStack>
  )
}

export default Header