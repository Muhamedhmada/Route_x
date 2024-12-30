import LandPage from '../../Components/LandPage/LandPage'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../Footer/Footer'
import VisaCard from './VisaCard/VisaCard'
function VisaOffer(){
  return(
    <div className="visa-container">
      <Navbar/>
      <LandPage header="Visa Offers" link_one="visa offers" link_one_href = "/visa-offer"/>
      <VisaCard/>
      <Footer/>
    </div>
  )
}
export default VisaOffer