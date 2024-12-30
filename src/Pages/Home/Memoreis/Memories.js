import {ArrowLeft, ArrowRight} from "../../../Assets/SVG's/SVG's";
import "./Memories.css";
import img from '../../../Assets/Images/Rectangle 5328.png'
import { useState } from "react";
function Memories() {

  const [i , setI] = useState(1)

  let arr = [
    {type:"business" , desc:"Lorem Ipsum is simply dummy text the printing and provide best visa ever  " },
    {type:"working" , desc:"Lorem Ipsum is simply dummy text the printing and provide best visa ever" },
    {type:"student" , desc:"Lorem Ipsum is simply dummy text the printing and provide best visa ever"},
    {type:"tourist" , desc:"Lorem Ipsum is simply dummy text the printing and provide best visa ever" },
    {type:"guided" , desc:"Lorem Ipsum is simply dummy text the printing and provide best visa ever" },
    {type:"poor" , desc:"Lorem Ipsum is simply dummy text the printing and provide best visa ever" },
  ]
  arr.length = 5


  const handleKey = (event)=>{
    console.log(event.key)
    if(event.key ==="ArrowRight"){
      handleNext()
    }
    if(event.key === "ArrowLeft"){
      handlePrev()
    }
  }

  const handleNext = ()=>{
   if(i < 4){
     setI(prev=>prev+1)
   }
  }

  const handlePrev = ()=>{
    if(i > 0){
      setI(prev=>prev-1)
    }
  }

  let cards = arr.map((item , index)=>{
    return(
      <div className={i === index?"card show":"card"}>
        <div className={i === index?"info show":"info"}>
          <h3>{item.type}</h3>
          <p>{item.desc}</p>
          <button>
            apply now 
            <ArrowRight color="white" width="20px"/>
          </button>
        </div>
      </div>
    )
  })
  return (
    <div className='memoreis-container' tabIndex={0} onKeyDown={handleKey}>
      <div className='memories-content'>
        <div className='info'>
          <div className='header'>
            <span>
              <img src={img} alt="" />
              our countries
            </span>
            <h1>Making Memories Around World Unforgettable</h1>
          </div>
          <div className='next-prev'>
            <div className='prev' onClick={()=>handlePrev()}>
              <ArrowLeft width="25px" color="white"/>
            </div>
            <div className='next' onClick={()=>handleNext()}>
              <ArrowRight width="25px" color="white"/>
            </div>
          </div>
        </div>
        <div className="cards">
          {cards}
        </div>
      </div>
    </div>
  );
}
export default Memories;
