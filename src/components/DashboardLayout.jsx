import { Flex , Box, Container } from '@chakra-ui/react'
import React from 'react'
import SideNav from './SideNav'
import TopNav from './TopNav'

const DashboardLayout = ({ title , children }) => {
  return (
    <Flex>
        <SideNav/>
            <Box flexGrow={1}>
              <TopNav title={title}/>
              </Box>
              <Container maxW="80rem" px="4">
              {children}
              </Container>
        </Flex>
  )
}

export default DashboardLayout