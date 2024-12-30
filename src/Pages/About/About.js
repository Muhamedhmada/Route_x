import Countries from "../../Components/Countries/Countries";
import Form from "../../Components/Form/Form";
import LandPage from "../../Components/LandPage/LandPage";
import Navbar from "../../Components/Navbar/Navbar";
import Sponsers from "../../Components/Sponsers/Sponsers";
import About2 from "../../Components/About2/About2";
import BestOffer from "../../Components/BestOffer/BestOffer";
import About1 from "../../Components/About1/About1";
import Footer from "../Footer/Footer";

function About(){
  return(
    <div className="about-container" style={{
      backgroundColor:"white"
    }}>
      <Navbar />
      <LandPage header="About us" link_one="about us" link_one_href="/about"/>
      <About1/>
      <About2/>
      <BestOffer/>
      <Sponsers/>
      <Form background="#E5E5E5" formBackground = "white"/>
      <Countries dataLength = "6" showHeader ={true}/>
      <Footer/>
    </div>
  )
}
export default About