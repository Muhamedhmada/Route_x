import "./Quote.css";
import QuoteImage from "../../../Assets/Images/Quote.png";
import {ArrowLeft, ArrowRight} from "../../../Assets/SVG's/SVG's";
import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";

function Quote() {
  const influentialPeople = [
    {
      image:
      "https://www.cnet.com/a/img/resize/831086666c38a95e0c79bb95a5e108c6a3a1789f/hub/2017/01/28/79aa329a-dd1a-4839-9200-b4c51d004d4a/sundar-pichai-by-james-martin.jpg?auto=webp&fit=crop&height=1200&width=1200",
      name: "Sundar Pichai",
      jobTitle: "CEO of Google and Alphabet",
      quote:
      "A person who is happy is not because everything is right in his life. He is happy because his attitude towards everything in his life is right.",
    },
    {
      image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrGh43up3RAkGouoYLV4O5C8jcWAJkKBnc2A&s",
      name: "Barack Obama",
      jobTitle: "Former U.S. President",
      quote: "The best way to not feel hopeless is to get up and do something.",
    },
    {
      image:
      "https://cdn.prod.website-files.com/620adaab3d152ff2e284f502/65f354be46dc5de9a3b87ca9_6a0da046259346b2904ad5cd8c18ac25.jpg",
      name: "Tim Cook",
      jobTitle: "CEO of Apple",
      quote: "Let your joy be in your journey—not in some distant goal.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy2KGuKkIYw7BnP48T2ZGdJuhvaC5xuL1QgQ&s",
      name: "Elon Musk",
      jobTitle: "Entrepreneur and Innovator",
      quote:
        "When something is important enough, you do it even if the odds are not in your favor.",
    },
    {
      image:
        "https://media.vanityfair.com/photos/587926552a677fe11973b4da/master/w_2560%2Cc_limit/mark-zuckerberg-for-president.jpg",
      name: "Mark Zuckerberg",
      jobTitle: "CEO of Meta (Facebook)",
      quote:
        "The biggest risk is not taking any risk. In a world that is changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk1aEYC0ljBF77SdC4aGXqktQrUkPAkQsbDzGDb25GkfAvOR3hbg7-ZdW9dtuf9Ioo_T0&usqp=CAU",
      name: "Cristiano Ronaldo",
      jobTitle: "Professional Footballer",
      quote:
        "Dreams are not what you see in your sleep; they are things that do not let you sleep.",
    },
    {
      image:
        "https://assets.fxnetworks.com/cms-next/production/950c40a9-c758-426a-a2f9-be192d3fc395.jpg",
      name: "Kevin Hart",
      jobTitle: "Comedian and Actor",
      quote:
        "The only time you should look back is to see how far you've come.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQo2nxj1EU4ceqp3S_Wg5LlIgaxYFBS7KBrA&s",
      name: "Trevor Noah",
      jobTitle: "Comedian and TV Host",
      quote:
        "Comfort can be dangerous. Comfort provides a floor but also a ceiling.",
    },
  ];

  const [index, setIndex] = useState(0);

  const quoteVariants = {
    initial: {opacity: 0, y: -500}, // Start above the container
    animate: {opacity: 1, y: 0}, // End at normal position
    exit: {opacity: 0, y: 50}, // Exit below the container
  };
  const quoteVariants2 = {
    initial: {opacity: 0, x: -500}, // Start above the container
    animate: {opacity: 1, x: 0}, // End at normal position
    exit: {opacity: 0, x: 50}, // Exit below the container
  };

  const handleNext = () => {
    if (index < influentialPeople.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <div className='quote-container'>
      <div className='image'>
        <AnimatePresence mode='wait'>
          <motion.img
            key={index}
            variants={quoteVariants2}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{duration: 0.3}}
            src={influentialPeople[index].image}
            alt=''

          />
        </AnimatePresence>
      </div>
      <div
        style={{
          backgroundColor: "#83CD20",
          width: "100%",
          borderRadius: "20px",
        }}
      >
        <AnimatePresence mode='wait'>
          <motion.div
            className='quote'
            key={index}
            variants={quoteVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{duration: 0.3}}
          >
            <div className='img'>
              <img src={QuoteImage} alt='' />
            </div>
            <p>{influentialPeople[index].quote}</p>
            <div className='header'>
              <img src={influentialPeople[index].image} alt='' />
              <div className='personInfo'>
                <h3>{influentialPeople[index].name}</h3>
                <p>{influentialPeople[index].jobTitle}</p>
              </div>
            </div>
            <div className='btns'>
              <div className='line'></div>
              <div className='left' onClick={() => handlePrev()}>
                <ArrowLeft width='25px' color='#034833' />
              </div>
              <div className='right' onClick={() => handleNext()}>
                <ArrowRight width='30px' color='#034833' />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
export default Quote;
