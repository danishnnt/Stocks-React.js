import { Box, HStack ,Heading,Icon,Stack, Text } from "@chakra-ui/react"
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs"
import { MdOutlineSupportAgent } from "react-icons/md";


const SideNav = () => {
  
    const navLinks = [{
        icon: RxDashboard,
        text: "Dashboard",
        link: "/",
    },
    {
        icon: BsArrowDownUp,
        text: "Transactions",
        link: "/Transactions",
    }
]

  
    return (
    <Stack  
       boxShadow="lg"
       maxW="16rem"
       height="100vh"
       justify="space-between"
       
    > 
    <Box><Heading as="h1" fontSize="20px" textAlign="center" mt="3rem" color="#0a0808c8">
     @DanishKhan
    </Heading>
        <Box mt="6"mx="3" >
        {navLinks.map((nav) => (
            <HStack  key={nav.text} py="3" px="4" color="#797E82" borderRadius="10px"
             _hover={{bg:"#f3f3f7",
                      color:"black",
                      }} 
             
            >
             <Icon as={nav.icon} /> 
             <Text fontSize="14px" fontWeight="medium"
             >{nav.text}</Text>
            </HStack>
        ))}
        </Box>
        </Box>

        <Box mt="6"mx="3" mb="7">
        <HStack   py="3" px="4" color="#797E82" borderRadius="10px"
             _hover={{bg:"#f3f3f7",
                      color:"black",
                      }} 
             
            >
             <Icon as={MdOutlineSupportAgent} /> 
             <Text fontSize="14px" fontWeight="medium"
             >
                
                Support</Text>
            </HStack>
        </Box>
    </Stack>
  )
}

export default SideNav