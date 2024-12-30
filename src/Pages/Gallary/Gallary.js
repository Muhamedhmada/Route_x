import LandPage from "../../Components/LandPage/LandPage";
import Navbar from "../../Components/Navbar/Navbar";
import GallaryCard from "./GallaryCard/GallaryCard";

function Gallary(){
  return(
    <div className="gallary-container">
      <Navbar/>
      <LandPage header="GALLARY" link_one="gallary" link_one_href = "/gallary"/>
      <GallaryCard/>
    </div>
  )
}
export default Gallary