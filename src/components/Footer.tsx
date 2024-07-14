import { DragHandleIcon, RepeatClockIcon, StarIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, StackProps, Text } from "@chakra-ui/react";

interface FeatureProps extends StackProps {
    children: string;
}

function Feature(props: FeatureProps) {
    const { children, ...rest } = props;
    return (
        <HStack {...rest} spacing='24px'>
            <Text textAlign={['center', 'center', 'left']} fontSize='18px' fontWeight='700'> {children} </Text>
        </HStack>
    )
}

const Footer = () => {
  return (
    <Box maxW='1024px' m='auto' pt='40px' pb='32px'>
        <Flex px='48px' gap='40px' direction={['column', 'column', 'row']}>
            <HStack spacing='8'>
                <StarIcon color='purple.600' boxSize='34px'/>
                <Feature>30 days monye backGuarantree</Feature>
            </HStack>
            <HStack spacing='8'>
                <DragHandleIcon color='purple.600' boxSize='34px'/>
                <Feature>No setup fees 100% hassle-free</Feature>
            </HStack>
            <HStack spacing='8'>
                <RepeatClockIcon color='purple.600' boxSize='34px'/>
                <Feature>No monthly subscription Pay once and for all</Feature>
            </HStack>
        </Flex>
    </Box>
  )
};

export default Footer;
