import About1 from "../../Components/About1/About1";
import About2 from "../../Components/About2/About2";
import BestOffer from "../../Components/BestOffer/BestOffer";
import Navbar from "../../Components/Navbar/Navbar";
import Sponsers from "../../Components/Sponsers/Sponsers";
import Footer from "../Footer/Footer";
import AvailableCountry from "./AvailableCountry/AvailableCountry";
import HomeBlog from "./HomeBlog/HomeBlog";
import HomeCoaching from "./HomeCoaching/HomeCoaching";
import HomeCoaching1 from "./HomeCoaching1/HomeCoaching1";
import HomeFood from "./HomeFood/HomeFoode";
import HomeVisa from "./HomeVisa/HomeVisa";
import LandPage from "./LandPage/LandPage";
import Memories from "./Memoreis/Memories";
import Quote from "./Quote/Quote";

function Home(){
  return(
    <div className="home-container"
    style={{backgroundColor:"#F1F5EB"}}>
      <Navbar/>
      <LandPage/>
      <HomeFood/>
      <About1/>
      <Sponsers/>
      <Memories/>
      <HomeVisa/>
      <AvailableCountry/>
      <BestOffer/>
      <HomeCoaching1/>
      <HomeCoaching/>
      <Quote/>
      <About2/>
      <HomeBlog/>
      <Footer/>
    </div>
  )
}
export default Home