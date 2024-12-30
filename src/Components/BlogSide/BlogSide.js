import { Date, Search } from '../../Assets/SVG\'s/SVG\'s'
import './BlogSide.css'
import img from '../../Assets/Images/popularPostImage.png'
function BlogSide(){
  let arrCateg = ["fight booking" , "vacation pachages" , "car rental services" , "adventure travel planning" , "group travel organization" , "insurance services"]
  let arrTags = ["travel planning " , "safety guides" , "spa retreats" , "wine tours" , "travel pack" , "solo travel" , "travel programs"]
  let arrPost = [
    {img , date:"October 19, 2022" , header:"Find Your Adventure Live  Your Passion"},
    {img , date:"October 19, 2022" , header:"Ravel Beyond Your Imagination"},
    {img , date:"October 19, 2022" , header:"Adventure Awaits Around Every Corner"},
  ]
  let cards = arrPost.map(item=>{
    return(
      <div className="card">
        <div className="image">
          <img src={item.img} alt="" />
        </div>
        <div className="info">
          <p>
            <Date width="15px" color="#83CD20"/>
            {item.date}
          </p>
          <h4>{item.header}</h4>
        </div>
      </div>
    )
  })
  let categ = arrCateg.map(item=>{
    return(
      <li>{item}</li>
    )
  })
  let tags = arrTags.map(item=>{
    return(
      <p>{item}</p>
    )
  })
  return(
    <div className="blogSide-container">
      <aside>
        <div className="search">
          <h3>search here</h3>
          <div className="input">
            <input type="text" placeholder='Search..' />
            <div className="icon">
              <Search width="20px" color="#034833"/>
            </div>
          </div>
        </div>
        <div className="post">
          <h3>popular post</h3>
          <div className="cards">
            {cards}
          </div>
        </div>
        <div className="category">
          <h3>category</h3>
          <ul>
            {categ}
          </ul>
        </div>
        <div className="tags">
          <h3>popular tags</h3>
          <div className="cards">
            {tags}
          </div>
        </div>
      </aside>
    </div>
  )
}
export default BlogSide