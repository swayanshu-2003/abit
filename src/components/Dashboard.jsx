import React from 'react'
import { Box, Container, HStack, Heading, Image, Link, Text, VStack } from '@chakra-ui/react';
import Marquee from 'react-fast-marquee';
import { ImPlus } from "react-icons/im";
import '../style/style.css';
import Banner from '../media/banner.png';
import avatar from '../media/avatar.jpg';
import silence from '../media/card.png';
import Artist from '../media/artist.jpeg';
import Forest from '../media/forest.jpg';
import Lion from '../media/lion.jpg';
import River from '../media/river.jpg';
import Victim from '../media/victim.jpg';
import Water from '../media/water.jpg';
import Header from './Header';
import Releases from './Releases';
import Footer from './Footer';
import User from './User';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const data = [  //fetch data from backend
    { value: '1', label: 'Shared Videos' },
    { value: '$ 9510', label: 'Funds Raised' },
    { value: '317', label: 'Co-owner Community' },
    { value: '$ 3804', label: 'Co-owner Earnings' }
]
const user = {  //fetch data from backend
    name: 'DAN MACE',
    user_id: 'Johny_Films',
    bio: 'Simply a film fan creating original content for YouTube. Let’s Collaborate.',
    type: 'Creater',
    avatar: avatar,
}
const albums = [ //fetch data from backend
    { title: 'The Sound Of Silence', shares: 317, offered: '75 %', raised: '$ 3510', image: silence },
    { title: 'The Sound Of Water', shares: 3719, offered: '47 %', raised: '$ 9010', image: Water },
    { title: 'The Voice Of Artist', shares: 113, offered: '96 %', raised: '$ 3356', image: Artist },
    { title: 'The Cry Of A Victim', shares: 317, offered: '26 %', raised: '$ 8132', image: Victim },
    { title: 'The Roar Of A Lion', shares: 826, offered: '65 %', raised: '$ 1232', image: Lion },
    { title: 'The Sound Of Forest', shares: 99, offered: '05 %', raised: '$ 213', image: Forest },
    { title: 'The Sound Of River', shares: 18, offered: '86 %', raised: '$ 631', image: River },
    { title: 'The Sound Of River', shares: 18, offered: '86 %', raised: '$ 631', image: River },
    { title: 'The Sound Of River', shares: 18, offered: '86 %', raised: '$ 631', image: River },
]
const Dashboard = () => {
    return (
        <Container maxW='full' p={'0'}>
            {/* navbar */}
            <Header avatar={user.avatar} />

            {/* Banner */}
            <VStack h={'30rem'} width={'100%'} m={'0'} gap={'0'} >
                <Box width={'100%'} overflow={'hidden'}>
                    <Image src={Banner} alt='Channel Banner' w={'100%'} />
                </Box>
                <Box className='marquee-box' h={'6rem'} width={'100%'} m={'0'} bg={'#000000'} display={'flex'} alignItems={'center'}>
                    <Marquee>
                        <Text textAlign={'center'} height={'2.5rem'} fontSize={'1.4rem'} fontFamily={'Gloria Hallelujah'} color={'#acacac'} >John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill / Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator / Moved to NYC / 27.11.22 / Live now</Text>
                    </Marquee>
                </Box>
            </VStack>
            {/* user card */}
            <User user={user} />
            {/* releases */}
            <VStack className='releases' marginTop={'-5rem'}>
                <HStack borderRadius={'1rem'} p={'1rem'} boxShadow={'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'} className='statistics' display={'flex'} width={'90%'} height={'6.5rem'} m={'0rem auto'} justifyContent={'space-arround'} >
                    <VStack className='statistics-text' w={'55%'} h={'full'}>
                        <Heading w={'100%'} textAlign={'left'} fontFamily={'Bitter'} size={'lg'} fontWeight={'bold'}>Releases</Heading>
                        <Text w={'100%'} textAlign={'left'} fontFamily={'Bitter'} fontStyle={'italic'} fontSize={'1rem'}>Videos that you upload in collaboration with aBit appear here.</Text>
                    </VStack>
                    <HStack className='statistics-data' display={'flex'} w={'40%'} h={'full'} justifyContent={'space-between'}>
                        {data.map((item, index) =>
                            <>
                                <Box className='vertical-bar' id={index} border={'1.5px solid'} borderColor={'gray.400'} height={'83%'}></Box>
                                <Box display={'flex'} flexDir={'column'} justifyContent={'space-between'} id={index} w={'5.1rem'} h={'100%'}>
                                    <Heading className='grid-data' fontFamily={'Inter'} size={'md'} >{item.value}</Heading>
                                    <Text fontSize={'0.89rem'} color={'grey'}>{item.label}</Text>
                                </Box>
                            </>
                        )}

                    </HStack>
                </HStack>
                {/* upload and album section */}
                <Box marginY={'4rem'} display={'flex'} gap={'2rem'} flexWrap={'wrap'} alignItems={'center'} justifyContent={'center'} >
                    <Box _hover={{ bg: '#D1D1D1' }} display={'flex'} flexDir={'column'} alignItems={'center'} justifyContent={'end'} w={'16rem'} h={'18rem'} borderRadius={'1rem'} bg={'#e0e0e0'} color={'gray.400'} fontSize={'2.5rem'} cursor={'pointer'}>
                        <Box h={'55%'} display={'flex'} flexDir={'column'} alignItems={'center'} justifyContent={'space-between'}>
                            <ImPlus />
                            <Text marginBottom={'1.3rem'} textAlign={'center'} width={'85%'} fontFamily={'Inter'} fontSize={'0.8rem'} color={'gray.400'}>You haven’t uploaded any videos with aBit yet. Add now!</Text>
                        </Box>
                    </Box>
                    {/* released albums */}
                    {albums.map((items, index) =>
                        <Releases items={items} id={index} />
                    )}
                </Box>
            </VStack>
            {/* footer */}
            <Footer />
            <Text  display={'block'} textAlign={'center'} margin={'3rem'}><i>Designed by <Link color={'purple'} href='https://swayanshu-2003.github.io/portfolio' isExternal><strong>Swayanshu Panda <ExternalLinkIcon mx='2px' /></strong></Link></i></Text>
        </Container>
    )
}

export default Dashboard;