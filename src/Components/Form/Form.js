import "./Form.css";
import img from "../../Assets/Images/Image.png";
import img2 from "../../Assets/Images/object.png";
import {Call} from "../../Assets/SVG's/SVG's";
function Form(props) {
  return (
    <div className='form-container' style={{backgroundColor:props.background}}>
      <div className='image'>
        <img src={img} alt='' />
      </div>
      <div className='form-content'>
        <span>
          Contact Information
          <img src={img2} alt='' />
        </span>
        <h1>Let Your Wanderlust Guide You</h1>
        <form action='post' style={{backgroundColor:props.formBackground}}>
          <div className='input-two'>
            <div className='label-input'>
              <label htmlFor='mail'>your email</label>
              <div className='input'>
                <div className='icon'>
                  <Call width='15' color='#034833' />
                </div>
                <input type='email' placeholder='your email' id='mail' />
              </div>
            </div>
            <div className='label-input'>
              <label htmlFor='phone'>your phone</label>
              <div className='input'>
                <div className='icon'>
                  <Call width='15' color='#034833' />
                </div>
                <input type='number' placeholder='your phone' id='phone' />
              </div>
            </div>
          </div>
          <div className='label-input'>
            <label htmlFor='address'>your address</label>
            <div className='input'>
              <div className='icon'>
                <Call width='15' color='#034833' />
              </div>
              <input type='text' placeholder='your address' id='address' />
            </div>
          </div>
          <div className='label-input'>
            <label htmlFor='message'>your message</label>
            <div className='input'>
              <div className='icon'
                style={{top:"30px"}}
              >
                <Call width='15' color='#034833' />
              </div>
              <textarea
                name='message'
                id='message'
                placeholder='your message'
              ></textarea>
            </div>
          </div>
          <button>send message</button>
        </form>
      </div>
    </div>
  );
}
export default Form;
