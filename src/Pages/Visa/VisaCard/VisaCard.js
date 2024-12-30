import './VisaCard.css'

import { ArrowRight } from '../../../Assets/SVG\'s/SVG\'s';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function VisaCard(){

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const nav = useNavigate()
  const items = [
    {
      name: "United States",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1500,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0UO9SgFq5NXq--uPBFgQFkQh5fm1mxzx_R3URg3_YdqOKeDRQ0mKsjmbWy0g09TkE_xk&usqp=CAU"
    },
    {
      name: "Canada",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1300,
      img:"https://i.natgeofe.com/k/e2ffc795-8b1f-4479-8c95-b6497e5ca4f2/canada-vancouver.jpg?wp=1&w=1084.125&h=609"
    },
    {
      name: "Australia",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1700,
      img:"https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/10A3C/production/_129365186_gettyimages-103455489.jpg"
    },
    {
      name: "Germany",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1400,
      img:"https://internationalliving.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fwv75stsetqy3%2F5SLxbxZ11GmYsjFHSL5kWC%2F42cee1a3d15cfb3851f20e2e057583bf%2FGermany_Country_Guide.jpg%3Fq%3D60%26fit%3Dfill%26fm%3Dwebp&w=3840&q=60"
    },
    {
      name: "Japan",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1600,
      img:"https://admin.expatica.com/jp/wp-content/uploads/sites/18/2023/11/tokyo-skyline-fuji.jpg"
    },
    {
      name: "United Kingdom",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1800,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzVorEQPbJh5hDw9IPJnaIWxXlnkN5wzqxVA&s"
    },
    {
      name: "France",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1500,
      img:"https://images.directferries.com/1400x0/destinations/france.webp"
    },
    {
      name: "Italy",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1400,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDP1AF6UAgLNX2SgFynqvELm-nitxHzOXiYg&s"
    },
    {
      name: "Spain",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1350,
      img:"https://150429065.v2.pressablecdn.com/wp-content/uploads/2024/03/Valencia-View.jpg"
    },
    {
      name: "New Zealand",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1550,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8sC9F_2sfyJBjA8VPgwonn6UEgq5bzmcqkQ&s"
    },
    {
      name: "China",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1450,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDP1AF6UAgLNX2SgFynqvELm-nitxHzOXiYg&s"
    },
    {
      name: "India",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1200,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8sC9F_2sfyJBjA8VPgwonn6UEgq5bzmcqkQ&s"

    },
    {
      name: "Brazil",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1250,
      img:"https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i89a139672c6811ee/version/1693240459/best-places-to-visit-in-turkey-antalya.jpg"

    },
    {
      name: "South Africa",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1300,
      img:"https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i89a139672c6811ee/version/1693240459/best-places-to-visit-in-turkey-antalya.jpg"

    },
    {
      name: "Russia",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1400,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8sC9F_2sfyJBjA8VPgwonn6UEgq5bzmcqkQ&s"
    },
    {
      name: "Mexico",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1150,
      img:"https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i89a139672c6811ee/version/1693240459/best-places-to-visit-in-turkey-antalya.jpg"

    },
    {
      name: "Argentina",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1250,
      img:"https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i89a139672c6811ee/version/1693240459/best-places-to-visit-in-turkey-antalya.jpg"

    },
    {
      name: "South Korea",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1500,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8sC9F_2sfyJBjA8VPgwonn6UEgq5bzmcqkQ&s"

    },
    {
      name: "Singapore",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1550,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDP1AF6UAgLNX2SgFynqvELm-nitxHzOXiYg&s"
    },
    {
      name: "Switzerland",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1650,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDP1AF6UAgLNX2SgFynqvELm-nitxHzOXiYg&s"
    },
    {
      name: "Netherlands",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1500,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8sC9F_2sfyJBjA8VPgwonn6UEgq5bzmcqkQ&s"
    },
    {
      name: "Sweden",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1450,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpo_D6SurLqlFNMYcqLF7t9VEiGXq8HKpaMg&s"
    },
    {
      name: "Norway",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1550,
      img:"https://www.exploreworldwide.com/medialibraries/explore/explore-media/destinations/europe/denmark/denmark-main.jpg?ext=.jpg&width=1920&format=webp&quality=80&v=201704280926%201920w"
    },
    {
      name: "Denmark",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1600,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtARXfBXIRwGCBP9BGxvvkKfsQcw8eb3ifg&s"
    },
    {
      name: "Finland",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1400,
      img:"https://www.easysim.global/wp-content/uploads/2023/12/finland_helsinki_cathedral.webp"
    },
    {
      name: "Ireland",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1350,
      img:"https://www.traverse-blog.com/wp-content/uploads/2023/07/Dunguaire-Castle-Ireland-3.jpg"
    },
    {
      name: "Portugal",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1250,
      img:"https://media.cntraveler.com/photos/63e407bf9e62d3e60010ccd8/3:2/w_3000,h_2000,c_limit/Portugal_Christine%20Chitnis_4W1A3963.jpg"
    },
    {
      name: "Poland",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1200,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQusIRNtf8ZsufnT29FIhdQn-ZrcJH5BcmHfQ&s"
    },
    {
      name: "Greece",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1300,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_xrmaYn05JCXJ5ukbz9_bFnnRtNWuoOZDw&s"
    },
    {
      name: "Turkey",
      paragraph: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
      price: 1250,
      img:"https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i89a139672c6811ee/version/1693240459/best-places-to-visit-in-turkey-antalya.jpg"
    },
  ];

  items.length = 8
  
  let cards = items.map(item=>{
    return(
      <div className="card" data-aos="fade-up" data-aos-once="true">
        <div className="image">
          <img src={item.img} alt="" />
        </div>
        <div className="info">

          <div className="header">
            <h3>{item.name}</h3>
            <p>{item.paragraph}</p>
            <button onClick={()=>nav('/gallary')}>
              apply now
              <ArrowRight color="#034833" width="20px"/>  
            </button>
          </div>

          <span>${item.price}.00</span>

        </div>

      </div>
    )
  })
  return(
    <div className="visaCard-container">
      {cards}
    </div>
  )
}
export default VisaCard