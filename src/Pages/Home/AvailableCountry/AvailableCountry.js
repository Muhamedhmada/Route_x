import { ArrowLeft, ArrowRight, CheckRight } from '../../../Assets/SVG\'s/SVG\'s'
import './AvailableCountry.css'
import img2 from '../../../Assets/Images/About1Image.png'
function AvailableCountry(){
  let arr = [
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgoT0f0KAmRb_ox376XIqyhWFyfkBYIUDUHQ&s" , country:"canada" , features:["mistakes to avoid" , "your startup" , "knew about fonts"]},
    {img:"https://cdn.britannica.com/97/189797-050-1FC0041B/Night-view-Dhaka-Bangladesh.jpg" , country:"Bangladesh" , features:["mistakes to avoid" , "your startup" , "knew about fonts"]},
    {img:"https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/dupkeyphu41gaskx13ff" , country:"australia" , features:["mistakes to avoid" , "your startup" , "knew about fonts"]},
    {img:"https://career-advice.jobs.ac.uk/wp-content/uploads/london-e1634207674493.jpg.optimal.jpg" , country:"United kingdom" , features:["mistakes to avoid" , "your startup" , "knew about fonts"]}
  ]

  let cards = arr.map(item=>{
    return(
      <div className="card">
        <div className="image">
          <img src={item.img} alt="" />
        </div>
        <h3>{item.country}</h3>
        <ul>
          {
            item.features.map(item=>{
              return(
                <li><CheckRight width="20px" color="#034833"/> {item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  })
  return(
    <div className="availableCountry-container">
      <div className='info'>
          <div className='header'>
            <span>
              <img src={img2} alt="" />
              available country
            </span>
            <h1>Urban Escapes City Hopping Adventures</h1>
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
          {cards}
        </div>
    </div>
  )
}
export default AvailableCountry