import React from 'react'
import SideNav from '../../components/SideNav'
import TopNav from '../../components/TopNav'
import { Flex ,Box } from '@chakra-ui/react'

const Dashboard = () => {
  return (
    
      <Flex>
        <SideNav/>
            <Box flexGrow={1}>
              <TopNav/>
              </Box>
        </Flex>
    
  )
}

export default Dashboard