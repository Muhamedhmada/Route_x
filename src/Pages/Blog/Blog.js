import LandPage from "../../Components/LandPage/LandPage";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../Footer/Footer";
import BlogCard from "./BlogCard/BlogCard";

function Blog(){
  return(
    <div className="blog-container">
      <Navbar/>
      <LandPage header="Blog" link_one="blog" link_one_href="/blog"/>
      <BlogCard/>
      <Footer/>
    </div>
  )
}
export default Blog