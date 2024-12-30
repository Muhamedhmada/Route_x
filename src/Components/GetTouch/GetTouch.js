import { Call } from "../../Assets/SVG's/SVG's";
import './GetTouch.css'
function GetTouch(){
  return(
    <div className="getTouch-container">
      <h3>get touch</h3>
      <div className="icon">
        <Call color="white" width="30px"/>
      </div>
      <p>For fast service</p>
      <h3>(+888) 123 456 765</h3>
    </div>
  )
}
export default GetTouch