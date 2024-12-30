import './Sponsers.css'
import logo1 from '../../Assets/Images/Company logo.png'
import logo2 from '../../Assets/Images/Company logo (1).png'
import logo3 from '../../Assets/Images/Company logo (2).png'
import logo4 from '../../Assets/Images/Company logo (3).png'
import logo5 from '../../Assets/Images/Company logo (4).png'
function Sponsers(){
  return(
    <div className="sponsers-container">
      <img src={logo1} alt="" />
      <img src={logo2} alt="" />
      <img src={logo3} alt="" />
      <img src={logo4} alt="" />
      <img src={logo5} alt="" />
    </div>
  )
}
export default Sponsers