import Form from "../../Components/Form/Form";
import LandPage from "../../Components/LandPage/LandPage";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../Footer/Footer";

import './Contact.css'

function Contact(){
  return(
    <div className="contact-container">
      <Navbar/>
      <LandPage header="contact" link_one="contact" link_one_href = "/contact"/>
      <Form formBackground="#F1F5EB"/>
      <Footer/>
    </div>
  )
}
export default Contact