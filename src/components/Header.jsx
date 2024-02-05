import React from 'react'
import { Avatar, HStack, Heading, Icon, Image, Menu, MenuButton, MenuItem, MenuList, Spacer} from '@chakra-ui/react';
import { Link } from '@chakra-ui/react'
import { ChevronDownIcon} from '@chakra-ui/icons'
import { IoWallet } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import '../style/style.css';

const Header = (props) => {
    return (
        <HStack className='navbar' bg={'white'} zIndex={'11'} position={'sticky'} top={'0'} h={'5rem'} width={'100%'} borderBottom={'1px solid black'} m={'0'} paddingX={'3.5rem'}>
            <Link>
                <Heading className='logo-text' fontFamily={'Inter'} size={'lg'}>
                    aBit
                </Heading>
            </Link>
            <Spacer />
            <HStack>
                <button className='button'>New Video
                </button>
                <IoWallet className='nav-icons' />
                <FaBell className='nav-icons' />
                {/* <IoIosArrowDown className='nav-icons' /> */}
                <Menu>
                    <MenuButton className='avatar-menu'>
                        <Avatar border={'1px solid gray'} cursor={'pointer'} name='Dan mace' src={props.avatar} w={'2rem'} h={'2rem'} />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Manage Account</MenuItem>
                        <MenuItem>Log Out</MenuItem>

                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton className='menu-buttonn' as={ChevronDownIcon} >

                    </MenuButton>
                    <MenuList>
                        <MenuItem>Share</MenuItem>
                        <MenuItem>Downloads</MenuItem>
                        <MenuItem>Wallet</MenuItem>
                        <MenuItem>Edit Dashboard</MenuItem>
                        <MenuItem>Delete</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </HStack>
    )
}

export default Header