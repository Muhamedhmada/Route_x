import LandPage from "../../../Components/LandPage/LandPage"
import Navbar from "../../../Components/Navbar/Navbar"

function CoachDetails(){
  return(
    <div className="coachDetails-container">
      <Navbar/>
      <LandPage header="Coaching Details" link_one="coaching-details" link_one_href = "/Coaching Details"/>
    </div>
  )
}
export default CoachDetails