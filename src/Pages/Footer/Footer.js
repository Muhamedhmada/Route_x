import './Footer.css'
import imgLogo from '../../Assets/Images/footerLog.png'
import img2 from '../../Assets/Images/planet.png'
import { AngleRight, CheckRight, Facebook, Instagram, LinkedIn, Telegram, Twitter } from '../../Assets/SVG\'s/SVG\'s'
function Footer(){
  const date = new Date()
  const year = date.getFullYear()
  return(
    <div className="footer-container">
      <div className="content">
        <div className="one">
          <div>
            <div className="icon">
              <img src={img2} alt="" />
            </div>
            <h2>Need any support for tour and visa?</h2>
          </div>
          <div>
            <div className="icon">
              <img src={img2} alt="" />
            </div>
            <h2>Need any support for tour and visa?</h2>
          </div>
        </div>
        <span></span>
        <div className="two">
          <ul>
            <li>
              <img src={imgLogo} alt="" />
            </li>
            <li>
              <p>Corporate business typically refers to large-scale mansola it enterprises or organizat</p>
            </li>
            <li>
              <Facebook width="20px" color="white"/>
              <Instagram width="20px" color="white"/>
              <Twitter width="20px" color="white"/>
              <LinkedIn width="20px" color="white"/>
            </li>
          </ul>
          <ul>
            <li>services</li>
            <li><CheckRight width="20px" color="#83CD20"/> mistakes to avoid</li>
            <li><CheckRight width="20px" color="#83CD20"/> your startup</li>
            <li><CheckRight width="20px" color="#83CD20"/> knew about fonts</li>
            <li><CheckRight width="20px" color="#83CD20"/> knew about fonts</li>
          </ul>
          <ul>
            <li>useful link</li>
            <li><AngleRight width="20px" color="#83CD20"/> latest news</li>
            <li><AngleRight width="20px" color="#83CD20"/> careers</li>
            <li><AngleRight width="20px" color="#83CD20"/> general inquireis</li>
            <li><AngleRight width="20px" color="#83CD20"/> case studies</li>
          </ul>
          <ul>
            <li>subscribe our newletter</li>
            <li><p>Corporate business typically refers to large-scale mansola it.</p></li>
            <li>
              
              <input type="email" placeholder='enter email' />
              <div className="icon">
                <Telegram/>
              </div>
            </li>

          </ul>
        </div>
        <span></span>
        <div className="copyRight">
          <p>&copy; Yoursitename {year}| ALL rights Reserved</p>
          <ul>
            <li>trams & condition</li>
            <li>privacy plicy</li>
            <li>contact us</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Footer