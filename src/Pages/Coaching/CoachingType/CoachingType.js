import './CoachingType.css'
import img from '../../../Assets/Images/CoachingTypeImage.png'
import { ArrowLeftSlant } from '../../../Assets/SVG\'s/SVG\'s'
import { useNavigate } from 'react-router-dom'
function CoachingType(){
  const nav = useNavigate()
  let arr = [
    {type:"OET Coaching" , description : "There are many variati of passages of engineer" },
    {type:"IELTS Coaching" , description : "There are many variati of passages of engineer" },
    {type:"TOFEL Coaching" , description : "There are many variati of passages of engineer" },
    {type:"SAT Coaching" , description : "There are many variati of passages of engineer" },
    {type:"Skills Exam" , description : "There are many variati of passages of engineer" },
    {type:"TOFEL Coaching" , description : "There are many variati of passages of engineer" },
    {type:"PTE Coaching" , description : "There are many variati of passages of engineer" },
    {type:"Skills Exam" , description : "There are many variati of passages of engineer" },
    {type:"IELTS Coaching" , description : "There are many variati of passages of engineer" },
  ]

  let types = arr.map(item=>{
    return(
      <div className="card">
        <div className="image">
          <img src={img} alt="" />
        </div>
        <div className="header">
          <h4>{item.type}</h4>
          <p>{item.description}</p>
          <button onClick={()=>nav('/coach-details')}>
            read more
            <ArrowLeftSlant width="20px" color="#83CD20" />
          </button>
        </div>
      </div>
    )
  })
  return(
    <div className="coachingType-container">
      {types}
    </div>
  )
}
export default CoachingType