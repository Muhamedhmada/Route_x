import './App.css';
import './Constant/Variable.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import SuccessStory from './Pages/SuccessStory/SuccessStory';
import Details from './Pages/SuccessStory/Details/Details';
import Gallary from './Pages/Gallary/Gallary';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Coaching from './Pages/Coaching/Coaching';
import CoachDetails from './Pages/Coaching/CoachDetails/CoachDetails';
import CountriesPage from './Pages/Countries/CountriesPage';
import Team from './Pages/Team/Team';
import TeamsDetails from './Pages/Team/TeamsDetails/TeamsDetails';
import Faqs from './Pages/Faqs/Faqs';
import Price from './Pages/Price/Price';
import VisaOffer from './Pages/Visa/Visa';
import VisaPage from './Pages/VisaPage/VisaPage';
import VisaDetails from './Pages/VisaPage/VisaDetails/VisaDetails';
import Blog from './Pages/Blog/Blog';
import CountriesDetails from './Components/Countries/CountriesDetails/CountriesDetails';
import BlogDetails from './Pages/Blog/BlogDetails/BlogDetails';
import ScrollToTop from './Components/ScrollTop/ScrollTop';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ScrollToTop/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/story" element={<SuccessStory />} />
          <Route path="/story-details" element={<Details />} />
          <Route path="/service" element={<Price />} />
          <Route path="/visa-offer" element={<VisaOffer />} />
          <Route path="/visa" element={<VisaPage />} />
          <Route path="/visa-details" element={<VisaDetails />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/coach-details" element={<CoachDetails />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="countries/details" element={<CountriesDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="blog/details" element={<BlogDetails />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/teams-details" element={<TeamsDetails />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      </header>
    </div>
  );
}

export default App;
