import LandPage from '../../../Components/LandPage/LandPage'
import Navbar from '../../../Components/Navbar/Navbar'
import './Details.css'
import img from '../../../Assets/Images/story_details_image.png'
import img2 from '../../../Assets/Images/story_details_quote.png'
import { ArrowRight } from '../../../Assets/SVG\'s/SVG\'s'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Footer/Footer'
function Details(){
  const nav = useNavigate()
  return(
    <div className="storyDetails-container">
      <Navbar/>
      <LandPage header="story details" link_one="story details" link_one_href = "/story-details"/>
      <div className="story-details">
        <div className="info">
          <h1>Visa  Got Approved for Eygpt </h1>
          <div className="img">
            <img src={img2} alt="" />
          </div>
          <p>Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis  viverra laoreet augue mattis fmentum ullamco rper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamc orper posuere viverra .Aliquam eros justo, posu Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobo rtis  viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere</p>
          <div>
            <h4>visa applied:</h4>
            <span>visa special</span>
          </div>
          <div>
            <h4>visa type:</h4>
            <span>10 years +</span>
          </div>
          <div>
            <h4>approval:</h4>
            <span>adbs@gmail.com</span>
          </div>
          <div className="btns">
            <button onClick={()=>nav('/visa')}>
              apply for Visa
              <ArrowRight color="#034833" width="20px"/>
            </button>
            <button onClick={()=>nav('/story')}>
              read more stories
            </button>
          </div>
        </div>
        <div className="image">
          <img src={img} alt="" />
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default Details