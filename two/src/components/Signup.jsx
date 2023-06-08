import React from 'react'
import { Container, VStack, Heading, Input, Button, Text, Avatar } from '@chakra-ui/react'
import { Link } from 'react-router-dom';


const Signup = () => {
    return (
        <Container maxW={'container.xl'} h={'100vh'} p={'16'}>

            <form>
                <VStack alignItems={'stretch'} spacing={'8'} w={['full', '96']} m={'auto'} my={'16'} >
                    <Heading>
                        Video Player
                    </Heading>
                    <Avatar alignItems={'center'} boxSize={'32'}/>

                    <Input placeholder={'Name'} type='text' required focusBorderColor='purple' />

                    <Input placeholder={'Email'} type='email' required focusBorderColor='purple' />

                    <Input placeholder={'Password'} type='password' required focusBorderColor='purple' />

                    <Button colorScheme='purple' type='submit'>Sign Up</Button>

                    <Text textAlign={'right'}>Existing User?  <Button variant={'link'} colorScheme='purple'>
                        <Link to={'/login'} >Log In</Link>
                    </Button></Text>

                </VStack>
            </form>
        </Container>
    )
}

export default Signup