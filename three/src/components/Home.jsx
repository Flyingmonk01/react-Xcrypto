import React from 'react';
import {Box, Image, Text} from "@chakra-ui/react";
import imgsrc from "../assets/btc.png";
import {motion} from "framer-motion"


const Home = () => {
  return (
    <Box bg={'purple.400'} w={'full'} h={'85vh'}>
      <motion.div 
      style={{
        height:"80vh",
      }}
      animate={{
        translateY : "20px",
      }}
      transition={{
        duration:1.5,
        repeat: Infinity,
        repeatType: "reverse",
      }}>
      <Image src={imgsrc} objectFit={'contain'} w={'full'} h={'full'}/>
      </motion.div>

      <Text fontSize={'6xl'} textAlign={'center'} fontFamily={'thick'} color={'whiteAlpha.800'} mt={'-14'}>
        Xcrypto
      </Text>
    </Box>

  )
}

export default Home