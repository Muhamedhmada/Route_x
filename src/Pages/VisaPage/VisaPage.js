import LandPage from "../../Components/LandPage/LandPage";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../Footer/Footer";
import './VisaPage.css'
import VisaPageCard from "./VisaPageCards";

function VisaPage(){

 
  return(
    <div className="visaPage-container">
      <Navbar/>
      <LandPage header="Visa" link_one="visa" link_one_href="/visa"/>
      <VisaPageCard cardNumber="6"/>
      <Footer/>
    </div>
  )
}
export default VisaPage