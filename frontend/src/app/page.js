import Companies from "./components/Companies"
import Herosection from "./components/HeroSection"
import SearchPlaces from "./components/SearchPlaces/SearchPlaces"
import TestiMonial from "./components/testimonials/TestiMonial"
import HowWork from "./components/HowWork"
import StartAgain from "./components/StartAgain"
import Explore from "./components/Explore"
import About from "./components/About"
import Faq from "./components/Faq"
import Counter from "./components/Counter"
import Whychoose from "./components/Whychoose"


const page = () => {
  return (
    <>
    <Herosection/>
    {/* <About/>    */}
   
    <SearchPlaces/>

    <Explore/>
    <Whychoose/>
    {/* <Companies/> */}
    <Faq/>
    <Counter/>
    <TestiMonial/>
    {/* <HowWork/> */}
    {/* <StartAgain/> */}
 

   
    </>
  )
}

export default page
