import './About2.css'
import frame from '../../Assets/Images/Frame.png'
function About2(){
  let arr = [
    {header:"Visa Voyage Agency" , pragraph:"Lorem Ipsum is simply dummy text the printing and typeser"},
    {header:"International Access Visas" , pragraph:"Lorem Ipsum is simply dummy text the printing and typeser"},
    {header:"Gateway to Global Citizenship" , pragraph:"Lorem Ipsum is simply dummy text the printing and typeser"},
  ]

  const cards = arr.map((item , i)=>{
    return(
      <div className="card">
        <h1>{i<10?"0"+(i+1):i}</h1>
        <h3>{item.header}</h3>
        <p>{item.pragraph}</p>
      </div>
    )
  })
  return(
    <div className="about2-container">
      <div className="content">
        <div className="header">
          <span>
            <img src={frame} alt="" />
            Process Overview
          </span>
          <h1>Unforgettable Getaways Escaping Routine </h1>
        </div>
      </div>
      <div className="cards">
        {cards}
      </div>
    </div>
  )
}
export default About2