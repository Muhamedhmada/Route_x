import { AngleRight } from '../../Assets/SVG\'s/SVG\'s'
import 'animate.css';
import './LandPage.css'
function LandPage(props){
  return(
    <div className="landPage-container">
      <div className="content">
      <h1 className='animate__animated animate__bounce animate'>{props.header}</h1>
      <div className="links">
        <a href="/">Home</a>
        <AngleRight width="30" color="white"/>
        <a href={props.link_one_href}>{props.link_one}</a>
      </div>
      </div>
    </div>
  )
}
export default LandPage