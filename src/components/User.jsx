import React from 'react'
import {Box, Card, CardBody, Heading, Image, Stack, Text} from '@chakra-ui/react';
import '../style/style.css';

const User = (props) => {
    return (
        <Card
            className='user-cardd'
            zIndex={'10'}
            position={'relative'}
            top={'-10rem'}
            left={'5rem'}
            width={'39rem'}
            height={'16rem'}
            boxShadow={'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'}
            borderRadius={'1.6rem'}
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            <Image
            className='user-avatar'
                objectFit='cover'
                // maxW={{ base: '100%', sm: '300px' }}
                src={props.user.avatar}
                alt='Avatar'
            />

            <Stack>
                <CardBody className='cardbody' display={'flex'} flexDir={'column'} justifyContent={'left'} paddingX={'1.9rem'} m={'0'}>
                    <Box className='user-name-id' display={'flex'} justifyContent={'space-between'}>
                        <Heading className='user-name' display={'inline'} width={'max-content'} textAlign={'left'} fontFamily={'Inter'} size={'lg'} textTransform={'capitalise'}>{props.user.name}</Heading>
                        <Text className='user-id' fontSize={'1.23rem'} color={'gray'} fontFamily={'Inter'}>/{props.user.user_id}/</Text>
                    </Box>

                    <Text className='bio' fontFamily={'Inter'} textAlign={'left'} py='2' fontWeight={'bold'} color={'gray.500'} fontSize={'1rem'}>
                        BIO
                    </Text>
                    <Text className='user-bio' color={'gray'} fontFamily={'Inter'} textAlign={'left'} py='2'>
                        {props.user.bio}
                    </Text>

                    <Box className='user-type' border={'2px solid black'} marginTop={'1rem'} bg={'#000000A6'} width={'full'} borderRadius={'0.5rem'} height={'2.5rem'}>
                        <Box display={'flex'} alignItems={'center'} color={'#313131'} bg={'white'} borderRight={'2px solid black'} borderRadius={'0.5rem'} width={'50%'} height={'100%'}>
                            <Text className='user-type-text' fontFamily={'Bitter'} w={'full'} textAlign={'center'} fontSize={'1.2rem'} >
                                {props.user.type}
                            </Text>
                        </Box>
                    </Box>
                </CardBody>
            </Stack>
        </Card>
    )
}

export default User