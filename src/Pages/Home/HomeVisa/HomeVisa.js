import './HomeVisa.css'
import img from'../../../Assets/Images/About1Image.png'
import VisaPageCard from '../../VisaPage/VisaPageCards'
function HomeVisa(){
  return(
    <div className="homeVisa-container">
      <div className="header">
        <span>
          <img src={img} alt="" />
          Visa Category
        </span>
        <h1>Seeking Adventure Thrills and Excitement Await</h1>
      </div>
      <VisaPageCard cardNumber="4"/>
    </div>
  )
}
export default HomeVisa