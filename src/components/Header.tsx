import { Box, Heading, Text } from "@chakra-ui/react";


// Building the Header Section
const Header = () => {
    return (
    <Box color='#F7FAFC' textAlign={['left', 'left', 'center']}>
        <Heading as='h1' fontSize={['3xl', '3xl', '5xl']} fontWeight='extrabold'>Simple pricing for your business</Heading>
        <Text opacity='0.6' fontWeight='medium' fontSize={['lg', 'lg','2xl']} pt='4'>plans that are carefully crafted to suit your business</Text>
    </Box>
    )
};
export default Header;