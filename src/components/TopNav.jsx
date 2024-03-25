import { Container, Flex, Menu , Heading, MenuButton, MenuItem, MenuList, Box, Button, HStack, Icon } from "@chakra-ui/react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

const TopNav = ({title}) => {
  return (
    <Box >
      < HStack minWidth="80rem"  h="16" justify="space-between" p="10" mx="auto" >
      
      <Heading fontSize="28px">{title}</Heading>
      <Menu>
        <MenuButton as={Button}>
          <Icon fontSize="25px" as={FaUserCircle}/>
        </MenuButton>
        <MenuList>
          <MenuItem>Log Out</MenuItem>
          <MenuItem>Support</MenuItem>
        </MenuList>
      </Menu>
    
  </HStack>
    </Box>
  );
};

export default TopNav;
