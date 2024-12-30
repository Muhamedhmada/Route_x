import { ArrowRight , CheckRight } from '../../Assets/SVG\'s/SVG\'s'
import LandPage from '../../Components/LandPage/LandPage'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Price.css'
const arr = [
  {type:"stater" , price:"16" ,features:["Mistakes To Avoid" , "Your Startup" , "Knew About Fonts" , "Knew About Fonts"]},
  {type:"basic" , price:"16" ,features:["Mistakes To Avoid" , "Your Startup" , "Knew About Fonts" , "Knew About Fonts"]},
  {type:"premium" , price:"16" ,features:["Mistakes To Avoid" , "Your Startup" , "Knew About Fonts" , "Knew About Fonts"]},
  {type:"popular" , price:"16" ,features:["Mistakes To Avoid" , "Your Startup" , "Knew About Fonts" , "Knew About Fonts"]},
  {type:"master" , price:"16" ,features:["Mistakes To Avoid" , "Your Startup" , "Knew About Fonts" , "Knew About Fonts"]},
  {type:"gold" , price:"16" ,features:["Mistakes To Avoid" , "Your Startup" , "Knew About Fonts" , "Knew About Fonts"]},
  // {type:"stater" , price:"16" ,features:["Mistakes To Avoid" , "Your Startup" , "Knew About Fonts" , "Knew About Fonts"]},
  // {type:"stater" , price:"16" ,features:["Mistakes To Avoid" , "Your Startup" , "Knew About Fonts" , "Knew About Fonts"]},
  // {type:"stater" , price:"16" ,features:["Mistakes To Avoid" , "Your Startup" , "Knew About Fonts" , "Knew About Fonts"]},
]

let cards = arr.map((item, index) => {
  return (
    <div className='card'>
      <h2>{item.type} plan</h2>
      <div className="info">

      <h1>
        {item.price}<span>/mo</span>
      </h1>
      <ul>
        {item.features.map((item) => {
          return (
          <li>
                 <CheckRight color="#83CD20" width="16px"/>  {item}
            </li>
          )
        })}
      </ul>
      <button>
        Buy plane <ArrowRight width="20px" color="#034833" />
      </button>
      </div>

    </div>
  );
});
function Price(){
  return(
    <div className="price-container">
      <Navbar/>
      <LandPage  header="Pricing Tables" link_one="Pricing Tables" link_one_href="/service"/>
      <div className="cards">
        {cards}
      </div>
      <Footer/>
    </div>
  )
}
export default Price