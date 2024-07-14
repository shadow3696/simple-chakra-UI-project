import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, HStack, Stack, StackProps, Text, VStack } from "@chakra-ui/react";

// Building the Pricing Section

export const ItemList = (props: StackProps) => {
    const {children, ...rest} = props;
    return (
        <HStack as='li' spacing='5'  {...rest} alignItems='start'>
            <CheckCircleIcon color='purple.500' boxSize='6'/>
            <Text fontSize='lg' fontWeight='bold' textAlign={['left', 'left', 'center']}>{ children }</Text>
        </HStack>
    )
}

const Pricing = () => {
    return (
        <Box mx='6'>
            <Box bgGradient={['linear(to-b, purple.100 45%, gray.50 5%, gray.200 50%)', 'linear(to-b, purple.100 45%, gray.50 5%, gray.200 50%)', 'linear(to-r, purple.100 45%, gray.50 5%, gray.200 50%)']} borderRadius='12' maxW='994px' m='auto' mt='12'>
                <Flex gap='9' direction={['column', 'column', 'row']}>
                    <VStack p='16'>
                        <Heading fontSize='2xl' fontWeight='extrabold'>Premium PRO</Heading>
                        <Heading as='h3' fontSize={['5xl', '5xl', '7xl']} mt='4'>$329</Heading>
                        <Text color='#171923' fontSize='xl' fontWeight='medium' mt='2'>billed just once</Text>
                        <Button colorScheme='purple' size='lg' w='282px' mt='6'>Get Started</Button>
                    </VStack>
                    <Box p='16' fontSize='lg'>
                        <Text textAlign='left'>Access these features when you get this pricing package for your business</Text>
                        <Stack as='ul' spacing='5' pt='6'>
                            <ItemList>Lorem ipsum, dolor sit amserunt, quia illo </ItemList>
                            <ItemList>Lorem ipsum, dolor sit amserunt, quia illo </ItemList>
                            <ItemList>Lorem ipsum, dolor sit amserunt, quia illo </ItemList>
                            <ItemList>Lorem ipsum, dolor sit amserunt, quia illo </ItemList>
                        </Stack>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
};
export default Pricing;