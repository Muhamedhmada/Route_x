import './GallaryCard.css'
import img from '../../../Assets/Images/gallaryImage.png'
function GallaryCard(){
  let arr = [1,2,3,4,5,6]
  const images = arr.map(item=>{
    return(
      <div className="image">
        <img src={img} alt="" />
      </div>
    )
  }) 
  return(
    <div className="gallaryCard-container">
      {images}
    </div>
  )
}
export default GallaryCard