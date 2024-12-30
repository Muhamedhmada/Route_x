import { useState } from 'react'
import { Minus, Plus } from '../../../Assets/SVG\'s/SVG\'s'
import CountryForm from '../../../Components/CountryForm/CountryForm'
import GetTouch from '../../../Components/GetTouch/GetTouch'
import LandPage from '../../../Components/LandPage/LandPage'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../Footer/Footer'
import './VisaDetails.css'
function VisaDetails(){
  let arr = [
    {question:"Where Wanderlust Meets Reality?" , answer:"It is a long established fact that a reader will be distr acted bioiiy the rea dablea content of a page when looking at its layout  Thoiie point of using.It is a long this established fact that a reader"},
    {question:"How far in advance should I book my flight?" , answer:"It is a long established fact that a reader will be distr acted bioiiy the rea dablea content of a page when looking at its layout  Thoiie point of using.It is a long this established fact that a reader"},
    {question:"What documents travel internationally?" , answer:"It is a long established fact that a reader will be distr acted bioiiy the rea dablea content of a page when looking at its layout  Thoiie point of using.It is a long this established fact that a reader"},
    {question:"Is travel insurance necessary?" , answer:"It is a long established fact that a reader will be distr acted bioiiy the rea dablea content of a page when looking at its layout  Thoiie point of using.It is a long this established fact that a reader"}
  ]


  const [show , setShow] = useState(null)
  let faq = arr.map((item , index)=>{
    return(
      <div className="faq">
        <div className={show === index?"header show":"header"}>
          <h4>{item.question}</h4>
          <div className="icon" onClick={()=>setShow(index === show?null:index)}
            style={{
              backgroundColor:
                index === show?"#83CD20":"#F1F5EB"
            }}
          >

            {
              index === show?
              <Minus color="white" width="18px"/>
              :
              <Plus color="#034833" width="18px"/>

              
            }
          </div>
        </div>
        <div className={show === index?"answer show":"answer"}>
          <p>{item.answer}</p>
        </div>
      </div>
    )
  })
  return(
    <div className="visaDetails-container">
      <Navbar/>
      <LandPage header="visa details" link_one="visa details" link_one_href="/visa-details"/>
      <div className="details">
        <div className="info">
          <h1>Wonders of Ancient Civilizations: A Journey Through Egypt</h1>
          <p>Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis  viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posu</p>
          <h2>Why to choose Egypt?</h2>
          <p>Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis  viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posu</p>
          <h2>frequently asked questions</h2>

          <div className="faqs">
            {faq}
          </div>
        </div>
        <aside style={{display:"flex",flexDirection:"column" , gap:"50px"}}>
          <CountryForm/>
          <GetTouch/>
        </aside>
      </div>
      <Footer/>
    </div>
  )
}
export default VisaDetails