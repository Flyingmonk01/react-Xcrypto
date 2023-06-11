import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from '../index';
import {
  Container,
  HStack,
  VStack,
  Image,
  Heading,
  Text

} from '@chakra-ui/react';
import Loader from './Loading';
import ErrorComponent from './ErrorComponent';

const Exchanges = () => {

  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchange = async () => {
      try {

        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);

      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchange();
  }, []);

  if(error) return <ErrorComponent message={"Error while fetching exchanges"}/>

  return <Container maxW={'container.xl'}>

    {loading ? <Loader /> : <>

      <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
        {
          exchanges.map((i) => (
            <ExchangeCard key={i.id} name={i.name} image={i.image} rank={i.trust_score_rank} url={i.url} />
          ))
        }
      </HStack>
    </>}

  </Container>
}


const ExchangeCard = ({ name, image, rank, url }) => <a href={url} target={'blank'}>

  <VStack w={'52'} h={'52'} p={'8'} m={'4'} borderRadius={'lg'} shadow={'lg'} transition={'all 0.5s'} css={{ "&:hover": { transform: 'scale(1.1)' } }} >
    <Image src={image}
      w={'10'}
      h={'10'}
      objectFit={'cover'}
      alt={'Exchange'}
    />
    <Heading size={'md'} noOfLines={'1'}> {rank}</Heading>
    <Text size={'md'} noOfLines={'1'}>{name}</Text>
  </VStack>

</a>


export default Exchanges