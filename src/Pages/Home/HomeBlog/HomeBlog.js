import { ArrowLeft, ArrowRight, Date, User } from '../../../Assets/SVG\'s/SVG\'s'
import './HomeBlog.css'
import img2 from '../../../Assets/Images/About1Image.png'

function HomeBlog(){
  let arr = [
    { img:"https://img.freepik.com/premium-photo/panoramic-landscape-showcasing-diverse-terrains-natural-wonders-worlds-continents_981640-67431.jpg" , date:"October 19, 2022" , creator:"By admin" , header:"World of Wander Discovering Diverse Landscapes" ,desc: "Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWgmxDfni7VCsdRSWuWg-3iqZaKGGRusrrQg&s",date:"October 19, 2022" , creator:"By admin" , header:"World of Wander Discovering Diverse Landscapes" ,desc: "Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiI2Bk0-HTUWhbstPjulM_3wt8ViZLxhwOOA&s",date:"October 19, 2022" , creator:"By admin" , header:"World of Wander Discovering Diverse Landscapes" ,desc: "Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum"}
  ]

  let cards = arr.map((item , index)=>{
    return(
      <div className="card">
      <div className="image">
        <img style={{height:"336px"}} src={item.img} alt="" />
      </div>
      <div className="info">
        <div className="header">
          <p>
            <Date width="15px" color="black"/>
            {item.date}
          </p>
          <p>
            <User width="15px" color="black"/>
            {item.creator}
          </p>
        </div>
        <h3>{item.header}</h3>
        <p>{item.desc}</p>
        <button>
          read More
          <ArrowRight color="#034833" width="15px"/>
        </button>
      </div>
    </div>
    )
  })
  return(
    <div className="homeBlog-container">
       <div className='info'>
          <div className='header'>
            <span>
              <img src={img2} alt="" />
              Recent Blogs
            </span>
            <h1>Journeys of Discovery Uncovering Hidden </h1>
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
export default HomeBlog