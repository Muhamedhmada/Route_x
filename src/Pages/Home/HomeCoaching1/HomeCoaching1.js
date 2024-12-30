import './HomeCoaching1.css'
import img from '../../../Assets/Images/HomeCoaching1Image.png'
import img2 from '../../../Assets/Images/About1Image.png'
import { ArrowLeft, ArrowRight, TopRight } from '../../../Assets/SVG\'s/SVG\'s'
function HomeCoaching1(){
  return(
    <div className="homeCoaching1-container">
       <div className='info'>
          <div className='header'>
            <span>
              <img src={img2} alt="" />
              supporting Coaching
            </span>
            <h1>A Tapestry of Experiences Cultural Encounters </h1>
          </div>
          <div className='next-prev'>
            <div className='prev' >
              <ArrowLeft width="25px" color="#034833"/>
            </div>
            <div className='next'>
              <ArrowRight width="25px" color="#034833"/>
            </div>
          </div>
        </div>
      <div className="cards">
        <div className="card">
          <div className="image">
            <img src={img} alt="" />
          </div>
          <div className="info">
            <div className="header">
              <h3>OET Coaching</h3>
              <p>There are many variati of passages of engineer</p>
            </div>
            <div className="icon">
              <TopRight width="20px" color="#034833"/>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={img} alt="" />
          </div>
          <div className="info">
            <div className="header">
              <h3>OET Coaching</h3>
              <p>There are many variati of passages of engineer</p>
            </div>
            <div className="icon">
              <TopRight width="20px" color="#034833"/>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={img} alt="" />
          </div>
          <div className="info">
            <div className="header">
              <h3>OET Coaching</h3>
              <p>There are many variati of passages of engineer</p>
            </div>
            <div className="icon">
              <TopRight width="20px" color="#034833"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomeCoaching1