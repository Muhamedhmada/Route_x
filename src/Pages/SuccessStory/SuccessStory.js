import LandPage from '../../Components/LandPage/LandPage'
import Navbar from '../../Components/Navbar/Navbar'
import StoryCard from './StoryCard/StoryCard'
import Footer from '../Footer/Footer'
import './SuccessStory.css'
function SuccessStory(){
  return(
    <div className="successStory-container">
      <Navbar/>
      <LandPage header="Success story" link_one="success story" link_one_href = "/story"/>
      <StoryCard/>
      <Footer/>
    </div>
  )
}
export default SuccessStory