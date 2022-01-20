import Header from "./components/Header"
import React from 'react'
import Footer from "./components/Footer"
import {Container} from 'react-bootstrap'
import Cards from './components/Cards'
//import PrizeData from "./PrizeData"
const App=()=> {
  return (
    <>
    <Header/>
    <main className="text-center py-4" >
      <Container>

      <h1 >THE NOBEL PRIZE</h1>
      <Cards/>

      
     </Container>
    </main>
    <Footer/>
    </>
  )
}

export default App;
