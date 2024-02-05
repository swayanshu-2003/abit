import React, { useState } from 'react'
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import '../style/style.css';

const Releases = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Box
      position="relative"
      cursor={'pointer'}
      display={'flex'}
      justifyContent={'space-between'}
      flexDir={'column'}
      p={'1rem'}
      w={'16rem'}
      h={'18rem'}
      borderRadius={'1rem'}
      bgImg={props.items.image}
      backgroundPosition="center"
      backgroundSize={'cover'}
      backgroundRepeat="no-repeat"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      transition="transform 0.3s ease-out"
      transform={isHovering ? 'scale(1.05)' : 'scale(1)'}
    >
      {isHovering && (
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          backgroundColor="rgba(0, 0, 0, 0.5)"
          borderRadius="1rem"
          zIndex={1}
        />
      )}
      <Heading zIndex={'4'} size={'md'} color={'white'} transition="transform 0.3s ease-out">
        {props.items.title}
      </Heading>
      <Grid
        zIndex={'5'}
        backdropFilter={'blur(12px)'}
        borderRadius={'1rem'}
        p={'0.6rem'}
        bg={'rgba(255, 255, 255, 0.2)'}
        templateColumns='repeat(3, 1fr)'
        rowGap={1}
        columnGap={5}
        transition="transform 0.3s ease-out"
        transform={isHovering ? 'translateY(-5px) scale(1.05)' : 'translateY(0) scale(1)'}
      >
        <GridItem
          w='100%'
          h='5'
        >
          <Text
            textAlign={'center'}
            fontSize={'0.85rem'}
            fontStyle={'Inter'}
            color={'white'}
          >
            Shares
          </Text>
        </GridItem>
        <GridItem
          w='100%'
          h='5'
        >
          <Text
            textAlign={'center'}
            fontSize={'0.85rem'}
            fontStyle={'Inter'}
            color={'white'}
          >
            Offered
          </Text>
        </GridItem>
        <GridItem
          w='100%'
          h='5'
        >
          <Text
            textAlign={'center'}
            fontSize={'0.85rem'}
            fontStyle={'Inter'}
            color={'white'}
          >
            Raised
          </Text>
        </GridItem>
        <GridItem
          w='100%'
          h='5'
        >
          <Text
            fontWeight={'bold'}
            textAlign={'center'}
            fontSize={'1rem'}
            fontStyle={'DM Sans'}
            color={'white'}
          >
            {props.items.shares}
          </Text>
        </GridItem>
        <GridItem
          w='100%'
          h='5'
        >
          <Text
            fontWeight={'bold'}
            textAlign={'center'}
            fontSize={'1rem'}
            fontStyle={'DM Sans'}
            color={'white'}
          >
            {props.items.offered}
          </Text>
        </GridItem>
        <GridItem
          w='100%'
          h='5'
        >
          <Text
            fontWeight={'bold'}
            textAlign={'center'}
            fontSize={'1rem'}
            fontStyle={'DM Sans'}
            color={'white'}
          >
            {props.items.raised}
          </Text>
        </GridItem>

      </Grid>
    </Box >
  )
}

export default Releases;