import LandPage from "../../Components/LandPage/LandPage"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../Footer/Footer"

import img from '../../Assets/Images/teamPerson.png'
import { Facebook, Instagram, LinkedIn, Share, Twitter } from "../../Assets/SVG's/SVG's"
import './Team.css'
import { useNavigate } from "react-router-dom"

function Team(){
  const nav = useNavigate()

  let arr = [
    {img , name :"muhamed hmada" , jobTitle:"front-end"},
    {img , name :"hmaza" , jobTitle:"front-end"},
    {img , name :"abou trika" , jobTitle:"front-end"},
    {img , name :"omar marmoush" , jobTitle:"front-end"},
    {img , name :"ahmed" , jobTitle:"front-end"},
    {img , name :"muhamed" , jobTitle:"front-end"},
    {img , name :"yahia" , jobTitle:"front-end"},
    {img , name :"muhamed" , jobTitle:"front-end"},
    {img , name :"moustafa" , jobTitle:"front-end"},
  ]
  let card = arr.map((item)=>{
    return(

    <div className="card" onClick={()=>nav('/teams-details' ,
    {state:{
      name:item.name,
      img,
      jobTitle:item.jobTitle
    } }
    )}>
      <div className="image">
        <img src={item.img} alt="" />
      </div>
      <div className="desc">
        <div className="info">

        <h3>{item.name}</h3>
        <p>{item.jobTitle}</p>
        </div>
        <div className="icon" >
          <Share/>
          <div className="soicalMediaIcon">
            <Facebook color="white" width="15px"/>
            <Twitter color="white" width="15px"/>
            <Instagram color="white" width="15px"/>
            <LinkedIn color="white" width="15px"/>
          </div>
        </div>
      </div>
    </div>
    )

  })
  return(
    <div className="team-container">
      <Navbar/>
      <LandPage header="team" link_one = "team" link_one_href="/team"/>
      <div className="cards">
        {card}
      </div>
      <Footer/>
    </div>
  )
}
export default Team