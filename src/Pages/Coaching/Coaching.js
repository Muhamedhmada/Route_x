import LandPage from "../../Components/LandPage/LandPage";
import Navbar from "../../Components/Navbar/Navbar";
import Sponsers from "../../Components/Sponsers/Sponsers";
import Footer from "../Footer/Footer";
import CoachingType from "./CoachingType/CoachingType";

function Coaching(){
  return(
    <div className="coaching-container">
      <Navbar/>
      <LandPage header="Coaching" link_one="coaching" link_one_href = "/coaching"/>
      <CoachingType/>
      <Sponsers />
      <Footer/>
    </div>
  )
}
export default Coaching