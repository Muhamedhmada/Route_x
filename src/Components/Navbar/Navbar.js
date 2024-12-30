import "./Navbar.css";
import Logo from "../../Assets/Images/Nav_Logo.png";
import {AngleDown, ArrowRight} from "../../Assets/SVG's/SVG's";
import {Dropdown, Space} from "antd";
function Navbar() {
  const items = [
    {
      label: (
        <a href='/service' rel='noopener noreferrer'>
          PRICES
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a href='/coaching' rel='noopener noreferrer'>
          COACHING
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <a href='/faqs' rel='noopener noreferrer'>
          FAQs
        </a>
      ),
      key: "2",
    },
    {
      label: (
        <a href='/visa-offer' rel='noopener noreferrer'>
          VIS OFFER
        </a>
      ),
      key: "3",
    },
  ];
  const AboutItems = [
    {
      label: (
        <a href='/about' rel='noopener noreferrer'>
          ABOUT US
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a href='/story' rel='noopener noreferrer'>
          STORY
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <a href='/team' rel='noopener noreferrer'>
          TEAM
        </a>
      ),
      key: "2",
    },
  ];
  return (
    <div className='navbar-container'>
      <nav>
        <div className='image'>
          <img src={Logo} alt='' />
        </div>
        <div className='links'>
          <ul>
            <li>
              <a href='/'>home </a> 
            </li>
            <li>
              <Dropdown
                menu={{
                  items:AboutItems
                }}
                trigger={["click"]}
              >
                <a href='/about' onClick={(e) => e.preventDefault()}>
                  <Space>
                    About us
                    <AngleDown width='20' color='#034833' />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <a href='#/' onClick={(e) => e.preventDefault()}>
                  <Space>
                    services
                    <AngleDown width='20' color='#034833' />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li>
              <a href='/countries'>countries</a>{" "}
              {/* <AngleDown width='20' color='#034833' /> */}
            </li>
            <li>
              <a href='/visa'>Visa</a>{" "}
              {/* <AngleDown width='20' color='#034833' /> */}
            </li>
            <li>
              <a href='/blog'>blog</a>{" "}
              {/* <AngleDown width='20' color='#034833' /> */}
            </li>
            <li>
              <a href='/contact'>contact</a>{" "}
              {/* <AngleDown width='20' color='#034833' /> */}
            </li>
            
          </ul>
        </div>
        <div className='button'>
          <button>
            get an appointment <ArrowRight width='20px' color='white' />
          </button>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
