// import img from '../../../Assets/Images/homeCoaching.png'
import img from '../../../Assets/Images/About1Image.png'
import { ArrowRight } from '../../../Assets/SVG\'s/SVG\'s'
import './HomeCoaching.css'
function HomeCoaching(){
  return(
    <div className="homeCoaching-container">
      <div className="homeCoaching-content">
        <div className="header">
          <span>
            <img src={img} alt="" />
            our coaching
          </span>
          <h1>Exploring the Unknown Voyages of Wonder </h1>
        </div>
        <div className="info">
          <div className="cards">
            <div className="card">
              <div className="header">
                <h3>Courtney Henry</h3>
                <p>Medical Assistant</p>
              </div>
              <div className="icon">
                <ArrowRight color="white" width="30px"/>
              </div>
            </div>
            <div className="card">
              <div className="header">
                <h3>Courtney Henry</h3>
                <p>Medical Assistant</p>
              </div>
              <div className="icon">
                <ArrowRight color="white" width="30px"/>
              </div>
            </div>
            <div className="card">
              <div className="header">
                <h3>Courtney Henry</h3>
                <p>Medical Assistant</p>
              </div>
              <div className="icon">
                <ArrowRight color="white" width="30px"/>
              </div>
            </div>
          </div>
          <div className="image">
            <img src={"https://i.insider.com/6089ae983f0560001881c99b?width=700"} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomeCoaching