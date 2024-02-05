import React from 'react';
import {Box, HStack, Heading, Spacer, Text, VStack } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react'
import {ExternalLinkIcon } from '@chakra-ui/icons';
import '../style/style.css';

const Footer = () => {
    return (
        <HStack className='footer' w={'85%'} h={'6rem'} m={'5rem auto'} >
            <VStack className='footer-left' fontFamily={'Bitter'}>
                <Heading size={'xl'} width={'full'}>aBit</Heading>
                <Text>Changing the way in which creators and fans interact.</Text>
            </VStack>
            <Spacer className='footer-spacer' />
            <HStack className='footer-right' h={'full'}>
                <Box border={'1.5px solid'} borderColor={'gray.300'} height={'95%'}></Box>
                <Box className='footer-right-link-box' fontSize={'0.9rem'} fontWeight={'bold'} display={'flex'} flexDir={'column'} justifyContent={'space-between'} h={'full'}>
                    <Link className='footer-link' isExternal>
                        Home <ExternalLinkIcon mx='2px' />
                    </Link>
                    <Link className='footer-link' isExternal>
                        Are You a Creater?  <ExternalLinkIcon mx='2px' />
                    </Link>
                    <Link className='footer-link' isExternal>
                        Support <ExternalLinkIcon mx='2px' />
                    </Link>
                </Box>
            </HStack>
        </HStack>
    )
}

export default Footer;