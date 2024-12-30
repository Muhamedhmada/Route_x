import { ArrowRight, Play } from '../../../Assets/SVG\'s/SVG\'s'
import img from '../../../Assets/Images/homeLandPageImage.png'
import './LandPage.css'
function LandPage(){
  return(
    <div className="land-container">
      <div className="content">

        <div className="info">
          <h1>Visa Made Easy Dreams Made Possible</h1>
          <div className="btns">
            <button>
              read more 
              <ArrowRight width="20px" color="white"/>
            </button>
            <button>
              <div className="icon">
                <Play width="25px" color="white"/>
              </div>
              watch our videos
            </button>
          </div>
        </div>

        <div className="image">
          <img src={img} alt="" />
        </div>

      </div>

    </div>
  )
}
export default LandPage