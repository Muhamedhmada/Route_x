import img1 from '../../Assets/Images/visa1.png'
import img2 from '../../Assets/Images/visa2.png'
import img3 from '../../Assets/Images/visa3.png'
import img4 from '../../Assets/Images/visa4.png'
import img5 from '../../Assets/Images/visa5.png'
import img6 from '../../Assets/Images/visa6.png'
import {  TopRight } from "../../Assets/SVG's/SVG's";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'
import "aos/dist/aos.css";
import AOS from "aos";

function VisaPageCard(props){
  const nav = useNavigate()

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  let arr = [
    {type:"business" , desc:"Et purus duis sollicitudin dignissim habitant. Egestas nulla quis  the venenatis cras sed eu " , img:img1  , imgType:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJWW5wn513SImH1feG5llzMOL5DUJBPS7Kmg&s"},
    {type:"working" , desc:"Et purus duis sollicitudin dignissim habitant. Egestas nulla quis  the venenatis cras sed eu " , img:img2 , imgType:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8U-CENR_S0fNAboTPkdSJO-FYwVuz_QRTPQ&s"},
    {type:"student" , desc:"Et purus duis sollicitudin dignissim habitant. Egestas nulla quis  the venenatis cras sed eu " , img:img3 , imgType:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5RTvu7Jl7lX7R9clYqWIBYl5WHVFw2KdO_Q&s"},
    {type:"tourist" , desc:"Et purus duis sollicitudin dignissim habitant. Egestas nulla quis  the venenatis cras sed eu " , img:img4 ,imgType:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzkG3jTBTcUVR36C86kdUJE0K3NeKzdHhxg&s"},
    {type:"guided" , desc:"Et purus duis sollicitudin dignissim habitant. Egestas nulla quis  the venenatis cras sed eu " , img:img5 , imgType:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjCxplI_Jbf0WPh_pe4ddI0BlfxHcKatinkg&s"},
    {type:"poor" , desc:"Et purus duis sollicitudin dignissim habitant. Egestas nulla quis  the venenatis cras sed eu " , img:img6 , imgType:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtBAvI-72yrPdcICm9Or1lvUhRQBYUu_jzgw&s"},
  ]
  arr.length = props.cardNumber
  let cards = arr.map((item , index)=>{
    return(
      <div className="card" data-aos="fade-up" date-aos-once="false"> 
        <div className="image">
          <img src={item.imgType} alt="" />
        </div>
        <div className="desc">
          <h3>{item.type} visa</h3>
          <p>{item.desc}</p>
          <div className="images">
            <div className="icon" onClick ={()=>nav('/visa-details')}>
              <TopRight width="20px" color="#83CD20"/>
            </div>
            <div className="image">
              <img src={item.img} alt="" />
            </div>
          </div>
        </div>
      </div>
    )
  })
  return(
    <div className="visaPageCards-container">
      <div className="cards">
        {cards}
      </div>

    </div>
  )
}
export default VisaPageCard