import BlogSide from '../../../Components/BlogSide/BlogSide'
import './BlogCard.css'
import img from '../../../Assets/Images/BlogImage.png'
import { ArrowRight, Date, User } from '../../../Assets/SVG\'s/SVG\'s'
import { useState } from 'react';
import { Pagination } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
function BlogCard(){

  const nav = useNavigate()
  let arr = [
    {creator:"admin" , date:"October 19, 2022" , comments:5 , header:"Wonders of Ancient Civilizations A Journey Through Egypt" , desc :"Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis  viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posu Aliquam eros "},
    {creator:"admin" , date:"October 19, 2022" , comments:5 , header:"The Road to Adventure Embarking on New Horizons" , desc :"Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis  viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posu Aliquam eros "},
    {creator:"admin" , date:"October 19, 2022" , comments:5 , header:"Journeys of Discovery Uncovering Hidden Treasures" , desc :"Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis  viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posu Aliquam eros "},
    {creator:"admin" , date:"October 19, 2022" , comments:5 , header:"Wonders of Ancient Civilizations A Journey Through Egypt" , desc :"Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis  viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posu Aliquam eros "},
    {creator:"admin" , date:"October 19, 2022" , comments:5 , header:"Wonders of Ancient Civilizations A Journey Through Egypt" , desc :"Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis  viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posu Aliquam eros "},
    {creator:"admin" , date:"October 19, 2022" , comments:5 , header:"Wonders of Ancient Civilizations A Journey Through Egypt" , desc :"Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis  viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posu Aliquam eros "},
    {creator:"admin" , date:"October 19, 2022" , comments:5 , header:"Wonders of Ancient Civilizations A Journey Through Egypt" , desc :"Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis  viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posu Aliquam eros "},
    {creator:"admin" , date:"October 19, 2022" , comments:5 , header:"Wonders of Ancient Civilizations A Journey Through Egypt" , desc :"Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis  viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posu Aliquam eros "},
    {creator:"admin" , date:"October 19, 2022" , comments:5 , header:"Wonders of Ancient Civilizations A Journey Through Egypt" , desc :"Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis  viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posu Aliquam eros "},
  ]

  

  const [current, setCurrent] = useState(1);
  const pageSize = 3
  const onChange = (page) => {
    console.log("Page:", page);
    setCurrent(page);
  };

  const startIndex = (current - 1) * pageSize;
  const paginatedCards = arr.slice(startIndex, startIndex + pageSize);

  
  const quoteVariants2 = {
    initial: {opacity: 0, x: -500}, // Start above the container
    animate: {opacity: 1, x: 0}, // End at normal position
    exit: {opacity: 0, x: 50}, // Exit below the container
  };

  let cards = paginatedCards.map((item , index)=>{
    return (

      // <AnimatePresence mode='wait'>

      <motion.div
      
      key={index}
      variants={quoteVariants2}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{duration: 0.3}}
      
      className='card'>
        <div className='image'>
          <img src={img} alt='' />
        </div>
        <div className='info'>
          <p>
            <User width='15px' color='black' />
            By {item.creator}
          </p>
          <p>
            <Date width='15px' color='black' />
            {item.date}
          </p>
          <p>comments({item.comments < 10 ? "0" + item.comments : item.comments})</p>
        </div>
        <h1>{item.header}</h1>
        <p>{item.desc}</p>
        <button onClick={()=> nav('./details')}>
          learn more
          <ArrowRight color='white' width='20px' />
        </button>
      </motion.div>
   



    );
   })


  
  return(
    <div className="blogCard-container">
      <div className="cards">

        <AnimatePresence mode='wait' key={current}>

        {cards}
        </AnimatePresence>
        <Pagination current={current} onChange={onChange} total={arr.length} pageSize = {pageSize} />
      </div>
      <BlogSide/>
    </div>
  )
}
export default BlogCard