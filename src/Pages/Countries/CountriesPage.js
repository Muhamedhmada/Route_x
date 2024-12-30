import Countries from '../../Components/Countries/Countries'
import LandPage from '../../Components/LandPage/LandPage'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../Footer/Footer'
import './CountriesPage.css'
function CountriesPage(){
  return(
    <div className="countriesPage-container">
      <Navbar/>
      <LandPage header="countries page" link_one = "countries page" link_one_href="/countries"/>
      <Countries dataLength = "12" showHeader = {false}/>
      <Footer/>
    </div>
  )
}
export default CountriesPage