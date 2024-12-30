import Footer from "../../../Pages/Footer/Footer";
import CountryForm from "../../CountryForm/CountryForm";
import LandPage from "../../LandPage/LandPage";
import Navbar from "../../Navbar/Navbar";
import "./CountriesDetails.css";

function CountriesDetails() {
  return (
    <>
    <div className='countriesDetails-container'>
      <Navbar />
      <LandPage
        header='countries details'
        link_one='countries details'
        link_one_href='./details'
      />
      <div className='content'>
        <div className='one'>
          <h1>Wonders of Ancient Civilizations: A Journey Through Egypt</h1>
          <p>
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
            viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posu
          </p>
          <h2>Why to choose Egypt?</h2>
          <p>
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
            viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posu
          </p>
          <h4>Passport Assistance:</h4>
          <p>
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
            viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
            Aliquam er
          </p>
          <h4>Car Rental Services:</h4>
          <p>
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
            viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
            Aliquam er
          </p>
          <h4>Travel Organization:</h4>
          <p>
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
            viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
            Aliquam er
          </p>
          <div>
            <h2>Our Service For Egypt</h2>
            <h4>Cultural Immersion Experiences</h4>
            <p>
              Aliquam eros justo, posuere loborti viverra laoreet matti
              ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
              viverra laoreet augue mattis fmentum ullamcorper viverra
            </p>
            <h4>Educational Travel Programs</h4>
            <p>
              Aliquam eros justo, posuere loborti viverra laoreet matti
              ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
              viverra laoreet augue mattis fmentum ullamcorper viverra
            </p>
            <h4>Volunteer and Service Travel Opportunities</h4>
            <p>
              Aliquam eros justo, posuere loborti viverra laoreet matti
              ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
              viverra laoreet augue mattis fmentum ullamcorper viverra
            </p>
          </div>
        </div>
        <aside>
          <CountryForm/>
        </aside>
      </div>
    </div>
      <Footer />
    </>

  );
}
export default CountriesDetails;
