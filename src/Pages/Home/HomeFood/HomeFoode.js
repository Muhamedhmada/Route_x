import './HomeFood.css'
import img1 from '../../../Assets/Images/050-worldwide.png'
function HomeFood(){
  let arr = [
    {header:"Food and Wine Tours" , desc:"Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac " , img:img1},
    {header:"Travel Opportunities" , desc:"Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac " , img:img1},
    {header:"Solo Travel Planning" , desc:"Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac " , img:img1},
  ]
  let cards = arr.map((item)=>{
    return(
      <div className="card">
        <div className="image">
          <img src={item.img} alt="" />
        </div>
        <h3>{item.header}</h3>
        <p>{item.desc}</p>
      </div>
    )
  })
  return(
    <div className="homeFood-container">
      {cards}
    </div>
  )
}
export default HomeFood