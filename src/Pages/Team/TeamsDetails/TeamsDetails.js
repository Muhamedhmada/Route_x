import {useLocation} from "react-router-dom";
import LandPage from "../../../Components/LandPage/LandPage";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import "./TeamsDetails.css";
function TeamsDetails() {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  return (
    <div className='teamsDetails-container'>
      <Navbar />
      <LandPage
        header='teams details'
        link_one='teams details'
        link_one_href='teams-details'
      />
      <div className='details-container'>
        <div className='one'>
          <div className='image'>
            <img src={data.img} alt='' />
          </div>
          <div className='info'>
            <h1>{data.name}</h1>
            <p>{data.jobTitle}</p>
            <p>
              Eros justo, posuere loborti viverra laoreet matti ullamcorper
              posuere viverra .Aliquam eros justo, posuere lobortis, viverra
              laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam
              eros justo, posuere loborti viverra laoreet matti ullamcorper
              posuere
            </p>
            <div>
              <h4>responsiblity:</h4>
              <p>visa special</p>
            </div>
            <div>
              <h4>experience:</h4>
              <p>10 years+</p>
            </div>
            <div>
              <h4>Email:</h4>
              <p>muhamedhamada2002@gmail.com</p>
            </div>
            <div>
              <h4>phone:</h4>
              <p>+20 1000473458</p>
            </div>
          </div>
        </div>
        <div className='two'>
          <h2>personal experience</h2>
          <p>
            IELTS score is internationally recognized as an English Language
            proficiency requirement for higher education, in almost all
            countries including the USA, the United Kingdom, Australia, Canada,
            and New Zealand. The highest IELT Academic module test assesses
            whether you have adequate possible band score is 9.0; most
            universities accept a score of 6.0 for undergraduate admission and
            6.0-7.0 for graduate admission. There are two versions of the
          </p>
          <p>
            IELTS score is internationally recognized as an English Language
            proficiency requirement for higher education, in almost all
            countries including the USA, the United Kingdom, Australia, Canada,
            and New Zealand. The highest IELT Academic module test assesses
            whether you have adequate possible band score is 9.0; most
            universities accept a score of 6.0 for undergraduate admission and
            6.0-7.0 for graduate admission. There are two versions of the{" "}
          </p>
        </div>
        <div className="three">
          <div className="skills">
            <h2>Professional Skill</h2>
            <div className="skill">
              <div className="skillName">
                <p>Professional Skill</p>
                <p>70%</p>
              </div>
              <div className="rate"></div>
            </div>
            <div className="skill">
              <div className="skillName">
                <p>Power Design Skill</p>
                <p>60%</p>
              </div>
              <div className="rate"></div>
            </div>
            <div className="skill">
              <div className="skillName">
                <p>Comfort Functionality</p>
                <p>50%</p>
              </div>
              <div className="rate"></div>
            </div>
          </div>
          <div className="form">
            <h2>contact me</h2>
            <p>By using form u agree with the message sorage, you</p>
            <div className="twoInput">
              <input type="text" placeholder="your name"/>
              <input type="email" placeholder="your email" />
            </div>
            <textarea placeholder="write your message"></textarea>
            <div className="btns">
              <button>
                <input type="checkbox" />
                <p>save my name email</p>
              </button>
              <button>post comment</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default TeamsDetails;
