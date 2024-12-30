import { useState } from 'react'
import { AngleDown, AngleRight } from '../../Assets/SVG\'s/SVG\'s'
import BestOffer from '../../Components/BestOffer/BestOffer'
import LandPage from '../../Components/LandPage/LandPage'
import Navbar from '../../Components/Navbar/Navbar'
import Sponsers from '../../Components/Sponsers/Sponsers'
import Footer from '../Footer/Footer'
import './Faqs.css'
function Faqs(){
  const arr = [
    {header:"What is the purpose of a visa?" , desc:"Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever"},
    {header:"How long does it take to process a visa application?" , desc:"Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever"},
    {header:"What documents are required for a visa application?" , desc:"Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever"},
    {header:"Can I apply for a visa if I have a criminal record?" , desc:"Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever"},
    {header:"Is there an age limit for applying for a visa?" , desc:"Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever"},
    {header:"How much does it cost to work with your agency?" , desc:"Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever"},
    {header:"What happens if my visa application is denied?" , desc:"Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever"},
    {header:"What is the difference between a tourist visa?" , desc:"Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever"},
    {header:"How long does it take for you to complete a project?" , desc:"Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever"},
    {header:"Can I work with a tourist visa?" , desc:"Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever"},
    {header:"Do I need a visa if I am just transiting through a country?" , desc:"Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever"},
    {header:"What is the purpose of a visa?" , desc:"Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever"},
  ]

  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to toggle visibility
  const toggleFaq = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  let faq = arr.map((item , index)=>{
    return(
      <div className="faq">
        <div className="header" onClick={()=> toggleFaq(index)}>
          <h4>{item.header}</h4>
          <div className="icon"
            style={{backgroundColor:expandedIndex === index ?"#83CD20":"#F1F5EB"}}
          >
            {expandedIndex === index ? <AngleDown color="#034833" width="20px"/>:<AngleRight color="#034833" width="20px"/>}
          </div>
        </div>
        <p className={expandedIndex===index?"desc show":"desc"}>{item.desc}</p>
      </div>
    )
  })

  
  return(
    <div className="faqs-container">
      <Navbar/>
      <LandPage header="FAQ" link_one="FAQ" link_one_href="/faq"/>
      <div className="faq-container">
        {faq}
      </div>
      <Sponsers/>
      <BestOffer/>
      <Footer/>
    </div>
  )
}
export default Faqs