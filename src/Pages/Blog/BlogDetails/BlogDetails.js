import BlogSide from '../../../Components/BlogSide/BlogSide'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../Footer/Footer'
import './BlogDetails.css'
import img2 from '../../../Assets/Images/Rectangle 5656.png'
import img from '../../../Assets/Images/BlogImage.png'
import quote from '../../../Assets/Images/blogQuote.png'
import LandPage from '../../../Components/LandPage/LandPage'
import { CheckRight } from '../../../Assets/SVG\'s/SVG\'s'
function BlogDetails(){
  return (
    <div className='blogDetails-container'>
      <Navbar />
      <LandPage
        header='blog details'
        link_one='blog details'
        link_one_href='./details'
      />
      <div className='blogDetails-content'>
        <div className='info'>
          <div className='image'>
            <img src={img} alt='' />
          </div>
          <h1>Unity Bridge Visa Consultants</h1>
          <p>
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
            viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posu Aliquam eros
            justo, posuere loborti viverra laoreet matti ullamcorper posuere
            viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue
            mattis fmentum ullamcorper viverra laoreet Aliquam eros justo,
            posuere loborti viverra laoreet matti ullamcorper posuere viverra
            .Aliquam eros justo, posu
          </p>
          <p>
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
            viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posu
          </p>


          <div className="image2">
            <div className="image">
              <img src={img2} alt="" />
            </div>
            <div className="desc">

            <h2>Explore Beyond Boundaries Wanderlust Unleashed</h2>
            <p>Aliquam eros justo, posuere loborti viverra laoreet mat ti ullamcorper posuere viverra .Aliquam eros justo, po suere lobortis  viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam</p>
            <ul>
              <li><CheckRight width="20px" color="#83CD20"/>Mistakes To Avoid</li>
              <li><CheckRight width="20px" color="#83CD20"/>Mistakes To Avoid</li>
              <li><CheckRight width="20px" color="#83CD20"/>Mistakes To Avoid</li>
            </ul>
            </div>
          </div>

          <div className='quote'>
            <div className='icon'>
              <img src={quote} alt='' />
            </div>
            <p>
              With a commitment to driving technological evolution, our IT
              solutions and tour desigm services are the cornerstone of your
              digital progression. We transcend boundariesi enabling businesses
              to not{" "}
            </p>
            <h3>Stanio lainto</h3>
            <p>Authore</p>
          </div>
          <h2>Roam the Globe Write Your Story</h2>
          <p>
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
            viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posu Aliquam eros
            justo, posuere loborti viverra laoreet matti ullamcorper posuere
            viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue
            mattis fmentum ullamcorper viverra laoreet Aliquam eros justo,
            posuere loborti viverra laoreet matti ullamcorper posuere viverra
            .Aliquam eros justo, posu
          </p>
        </div>
        <BlogSide />
      </div>
      <Footer />
    </div>
  );
}
export default BlogDetails