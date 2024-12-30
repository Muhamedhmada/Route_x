import './StoryCard.css'
import { Pagination } from 'antd';

import quote from '../../../Assets/Images/success_quote.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

function StoryCard(){
  const nav  = useNavigate()
  const [current, setCurrent] = useState(1);
  const pageSize = 8
  const onChange = (page) => {
    console.log("Page:", page);
    setCurrent(page);
  };

  let arr = [
      {
        image: "https://via.placeholder.com/150?text=Person+1",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "John Doe",
        jobTitle: "Software Engineer",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+2",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "Jane Smith",
        jobTitle: "Graphic Designer",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+3",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "Alice Johnson",
        jobTitle: "Project Manager",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+4",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "Bob Brown",
        jobTitle: "Marketing Specialist",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+5",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "Clara White",
        jobTitle: "Data Analyst",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+6",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "Mike Green",
        jobTitle: "DevOps Engineer",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+7",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "Lisa Blue",
        jobTitle: "UX Designer",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+8",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "Tom Red",
        jobTitle: "Product Manager",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+9",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "Nancy Yellow",
        jobTitle: "Accountant",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+10",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "Paul Orange",
        jobTitle: "HR Specialist",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+11",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "Emily Purple",
        jobTitle: "Content Writer",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+12",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "Kevin Grey",
        jobTitle: "IT Consultant",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+13",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "Sara Brown",
        jobTitle: "SEO Specialist",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+14",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "Chris Gold",
        jobTitle: "Financial Advisor",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+15",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "Anna Silver",
        jobTitle: "Research Analyst",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+16",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "Brian Black",
        jobTitle: "Operations Manager",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+17",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "Sophia White",
        jobTitle: "Public Relations Officer",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+18",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "Daniel Green",
        jobTitle: "Cybersecurity Analyst",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+19",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "Rebecca Red",
        jobTitle: "Business Analyst",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+20",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "James Blue",
        jobTitle: "Quality Assurance Tester",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+21",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "Olivia Yellow",
        jobTitle: "Cloud Architect",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+22",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "Matthew Orange",
        jobTitle: "Mobile App Developer",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+23",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "Isabella Purple",
        jobTitle: "AI Specialist",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+23",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "Isabella Purple",
        jobTitle: "AI Specialist",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+23",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "Isabella Purple",
        jobTitle: "AI Specialist",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+23",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "Isabella Purple",
        jobTitle: "AI Specialist",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+23",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "Isabella Purple",
        jobTitle: "AI Specialist",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+23",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "Isabella Purple",
        jobTitle: "AI Specialist",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+23",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "Isabella Purple",
        jobTitle: "AI Specialist",
      },
      {
        image: "https://via.placeholder.com/150?text=Person+23",
        paragraph: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
        name: "Isabella Purple",
        jobTitle: "AI Specialist",
      },
    
  ]
  const quoteVariants2 = {
    initial: {opacity: 0, x: 500}, // Start above the container
    animate: {opacity: 1, x: 0}, // End at normal position
    exit: {opacity: 0, x: 50}, // Exit below the container
  };
    
  const startIndex = (current - 1) * pageSize;
  const paginatedCards = arr.slice(startIndex, startIndex + pageSize);

  let cards = paginatedCards.map((item , index)=>{
    return(
      <motion.div
      

      key={index}
            variants={quoteVariants2}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{duration: 0.3}}
      
      
      
      className="card" onClick={()=>nav('/story-details')}>
        <div className="img">
          <img src={quote} alt="" />
        </div>
        <p>{item.paragraph}</p>
        <div>
          <img src={item.image} alt="" />
          <div className="name">
            <h3>{item.name}</h3>
            <span>{item.jobTitle}</span>
          </div>
        </div>
      </motion.div>
    )
  })
  return(
    <div className="storyCard-container">
      <div className="cards">
        <AnimatePresence mode='wait' key={current}>

        {cards}
        </AnimatePresence>
      </div>
      <Pagination current={current} onChange={onChange} total={arr.length} pageSize = {pageSize} />
    </div>
  )
}
export default StoryCard