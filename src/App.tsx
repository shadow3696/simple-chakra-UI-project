import { Box, VStack } from '@chakra-ui/react'
import './App.css'
import Header from './components/Header'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div>
        <Box as='section' pb='28'>
          <Box mt='2.5' pt='12' pb='28' color='gray.600' bgGradient='linear(to-b, purple.600 50%, white 50%)' px='8'>
            <VStack>
              <Header/>
              <Pricing/>
              <Footer/>
            </VStack>
          </Box>
        </Box>
      </div>
    </>
  )
}

export default App
