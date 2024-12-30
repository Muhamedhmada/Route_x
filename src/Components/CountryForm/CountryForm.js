import {useState} from "react";
import {AngleRight} from "../../Assets/SVG's/SVG's";
import "./CountryForm.css";
function CountryForm({onSelectContinent}) {
  let continents = [
    {
      continent: "Africa",
      countries: [
        {
          name: "Nigeria",
          image: "https://via.placeholder.com/150?text=Nigeria",
        },
        {name: "Egypt", image: "https://via.placeholder.com/150?text=Egypt"},
        {
          name: "South Africa",
          image: "https://via.placeholder.com/150?text=South+Africa",
        },
        {name: "Kenya", image: "https://via.placeholder.com/150?text=Kenya"},
        {
          name: "Morocco",
          image: "https://via.placeholder.com/150?text=Morocco",
        },
        {name: "Ghana", image: "https://via.placeholder.com/150?text=Ghana"},
        {
          name: "Ethiopia",
          image: "https://via.placeholder.com/150?text=Ethiopia",
        },
        {
          name: "Algeria",
          image: "https://via.placeholder.com/150?text=Algeria",
        },
        {
          name: "Tanzania",
          image: "https://via.placeholder.com/150?text=Tanzania",
        },
        {name: "Uganda", image: "https://via.placeholder.com/150?text=Uganda"},
        {name: "Angola", image: "https://via.placeholder.com/150?text=Angola"},
        {
          name: "Zimbabwe",
          image: "https://via.placeholder.com/150?text=Zimbabwe",
        },
      ],
    },
    {
      continent: "Asia",
      countries: [
        {name: "China", image: "https://via.placeholder.com/150?text=China"},
        {name: "India", image: "https://via.placeholder.com/150?text=India"},
        {name: "Japan", image: "https://via.placeholder.com/150?text=Japan"},
        {
          name: "South Korea",
          image: "https://via.placeholder.com/150?text=South+Korea",
        },
        {
          name: "Indonesia",
          image: "https://via.placeholder.com/150?text=Indonesia",
        },
        {
          name: "Saudi Arabia",
          image: "https://via.placeholder.com/150?text=Saudi+Arabia",
        },
        {
          name: "Vietnam",
          image: "https://via.placeholder.com/150?text=Vietnam",
        },
        {
          name: "Thailand",
          image: "https://via.placeholder.com/150?text=Thailand",
        },
        {name: "Iran", image: "https://via.placeholder.com/150?text=Iran"},
        {
          name: "Pakistan",
          image: "https://via.placeholder.com/150?text=Pakistan",
        },
        {
          name: "Malaysia",
          image: "https://via.placeholder.com/150?text=Malaysia",
        },
        {
          name: "Philippines",
          image: "https://via.placeholder.com/150?text=Philippines",
        },
      ],
    },
    {
      continent: "Europe",
      countries: [
        {
          name: "Germany",
          image: "https://via.placeholder.com/150?text=Germany",
        },
        {name: "France", image: "https://via.placeholder.com/150?text=France"},
        {
          name: "United Kingdom",
          image: "https://via.placeholder.com/150?text=United+Kingdom",
        },
        {name: "Italy", image: "https://via.placeholder.com/150?text=Italy"},
        {name: "Spain", image: "https://via.placeholder.com/150?text=Spain"},
        {name: "Poland", image: "https://via.placeholder.com/150?text=Poland"},
        {
          name: "Netherlands",
          image: "https://via.placeholder.com/150?text=Netherlands",
        },
        {name: "Sweden", image: "https://via.placeholder.com/150?text=Sweden"},
        {name: "Greece", image: "https://via.placeholder.com/150?text=Greece"},
        {
          name: "Belgium",
          image: "https://via.placeholder.com/150?text=Belgium",
        },
        {
          name: "Austria",
          image: "https://via.placeholder.com/150?text=Austria",
        },
        {
          name: "Denmark",
          image: "https://via.placeholder.com/150?text=Denmark",
        },
      ],
    },
    {
      continent: "North America",
      countries: [
        {
          name: "United States",
          image: "https://via.placeholder.com/150?text=United+States",
        },
        {name: "Canada", image: "https://via.placeholder.com/150?text=Canada"},
        {name: "Mexico", image: "https://via.placeholder.com/150?text=Mexico"},
        {name: "Cuba", image: "https://via.placeholder.com/150?text=Cuba"},
        {name: "Panama", image: "https://via.placeholder.com/150?text=Panama"},
        {
          name: "Guatemala",
          image: "https://via.placeholder.com/150?text=Guatemala",
        },
        {
          name: "Honduras",
          image: "https://via.placeholder.com/150?text=Honduras",
        },
        {
          name: "El Salvador",
          image: "https://via.placeholder.com/150?text=El+Salvador",
        },
        {
          name: "Costa Rica",
          image: "https://via.placeholder.com/150?text=Costa+Rica",
        },
        {
          name: "Jamaica",
          image: "https://via.placeholder.com/150?text=Jamaica",
        },
        {
          name: "Bahamas",
          image: "https://via.placeholder.com/150?text=Bahamas",
        },
        {
          name: "Barbados",
          image: "https://via.placeholder.com/150?text=Barbados",
        },
      ],
    },
    {
      continent: "South America",
      countries: [
        {name: "Brazil", image: "https://via.placeholder.com/150?text=Brazil"},
        {
          name: "Argentina",
          image: "https://via.placeholder.com/150?text=Argentina",
        },
        {
          name: "Colombia",
          image: "https://via.placeholder.com/150?text=Colombia",
        },
        {name: "Chile", image: "https://via.placeholder.com/150?text=Chile"},
        {name: "Peru", image: "https://via.placeholder.com/150?text=Peru"},
        {
          name: "Venezuela",
          image: "https://via.placeholder.com/150?text=Venezuela",
        },
        {
          name: "Paraguay",
          image: "https://via.placeholder.com/150?text=Paraguay",
        },
        {
          name: "Uruguay",
          image: "https://via.placeholder.com/150?text=Uruguay",
        },
        {
          name: "Ecuador",
          image: "https://via.placeholder.com/150?text=Ecuador",
        },
        {
          name: "Bolivia",
          image: "https://via.placeholder.com/150?text=Bolivia",
        },
        {
          name: "Suriname",
          image: "https://via.placeholder.com/150?text=Suriname",
        },
        {name: "Guyana", image: "https://via.placeholder.com/150?text=Guyana"},
      ],
    },
    {
      continent: "Australia and Oceania",
      countries: [
        {
          name: "Australia",
          image: "https://via.placeholder.com/150?text=Australia",
        },
        {
          name: "New Zealand",
          image: "https://via.placeholder.com/150?text=New+Zealand",
        },
        {name: "Fiji", image: "https://via.placeholder.com/150?text=Fiji"},
        {
          name: "Papua New Guinea",
          image: "https://via.placeholder.com/150?text=Papua+New+Guinea",
        },
        {name: "Samoa", image: "https://via.placeholder.com/150?text=Samoa"},
        {name: "Tonga", image: "https://via.placeholder.com/150?text=Tonga"},
        {
          name: "Vanuatu",
          image: "https://via.placeholder.com/150?text=Vanuatu",
        },
        {
          name: "Solomon Islands",
          image: "https://via.placeholder.com/150?text=Solomon+Islands",
        },
        {
          name: "Kiribati",
          image: "https://via.placeholder.com/150?text=Kiribati",
        },
        {
          name: "Micronesia",
          image: "https://via.placeholder.com/150?text=Micronesia",
        },
        {name: "Palau", image: "https://via.placeholder.com/150?text=Palau"},
        {name: "Tuvalu", image: "https://via.placeholder.com/150?text=Tuvalu"},
      ],
    },
  ];

  // const [data, setData] = useState(continents[0].countries);
  const [test, setTest] = useState(0);

  const handleClick = (continent , i) => {
    // let data = continents.filter((item) => item.continent === continent);
    // setData(data[0].countries);
    onSelectContinent(continent , i)
  };


  const country = continents.map((item, index) => {
    return (
      <li
        onClick={() => {
          handleClick(item.continent , index);
          setTest(index);
        }}
      >
        <h3 className={index === test ? "selected" : "none"}>
          {item.continent}
        </h3>
        <AngleRight width='30px' color='#034833' />
      </li>
    );
  });
  return (
    <aside className="countriesForm-container">
      <ul>{country}</ul>
    </aside>
  );
}
export default CountryForm;
