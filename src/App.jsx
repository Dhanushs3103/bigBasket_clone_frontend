//packages
import react from "react"
import { Container } from "@chakra-ui/react"

//local imports
import Navbar from './components/Navbar.jsx'
import TopSliders from "./components/TopSliders.jsx"
import BottomSlider from "./components/BottomSlider.jsx"
import SmartBasket from "./components/SmartBasket.jsx"
import BestSellers from "./components/BestSellers.jsx"
import TopOffers from "./components/TopOffers.jsx"
import FruitsAndVegies from "./components/FruitsAndVeggies.jsx"
import DailyStaples from "./components/DailyStaples.jsx"
import Snacks from "./components/Snacks.jsx"
import Cleanings from "./components/Cleanings.jsx"
import Beverages from "./components/Beverages.jsx"
import Beauty from "./components/Beauty.jsx"
import LastSliders from "./components/LastSliders.jsx"
import TopFooter from "./components/TopFooter.jsx"
import Footer from "./components/Footer.jsx"

function App() {

  return (
    <>
    {/* Navbar */}
      <Navbar/>
    {/* Below Navbar */}
     <Container maxW="container.xl" mt={"10"} p={4}>
        <TopSliders/>
        <BottomSlider/>
        <SmartBasket/>
        <BestSellers/>
        <TopOffers/>
        <FruitsAndVegies/>
        <DailyStaples/>
        <Beverages/>
        <Snacks/>
        <Cleanings/>
        <Beauty/>
        <LastSliders/>
        <TopFooter/>
     </Container>
     {/* Footer */}
     <Footer/>
    </>
  )
}

export default App
