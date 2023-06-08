import React from 'react';
import { Box, Button, Heading, HStack, Text, Input, Stack, VStack } from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';


const Footer = () => {
    return (
        <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
            <Stack direction={['column', 'row']}>
                <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                    <Heading textTransform={'uppercase'} size='md' textAlign={['center', 'left']}>
                        Subscribe to get updates
                    </Heading>

                    <HStack borderBottom={'2px solid white'}>
                        <Input placeholder='Enter Email Here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none' />


                        <Button p={'0'} colorScheme='purple' variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                            <AiOutlineSend size={20} />
                        </Button>
                    </HStack>
                </VStack>
                <VStack w='full' borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
                    <Heading textTransform={'uppercase'} textAlign={'center'}>
                        Video Player
                    </Heading>
                    <Text>All rights reserved</Text>
                </VStack>
                <VStack w={'full'}>
                    <Heading textTransform={'uppercase'} size={'md'}>
                        Social Media
                    </Heading>
                    <Button variant={'link'} colorScheme='whitealpha'>
                        <a target='black' href="https://youtube.com">
                            Youtube
                        </a>
                    </Button>

                    <Button variant={'link'} colorScheme='whitealpha'>
                        <a target='black' href="https://github.com">
                            GitHub
                        </a>
                    </Button>


                    <Button variant={'link'} colorScheme='whitealpha'>
                        <a target='black' href="https://instagram.com">
                            Instagram
                        </a>
                    </Button>
                </VStack>
            </Stack>

        </Box>
    )
}

export default Footer