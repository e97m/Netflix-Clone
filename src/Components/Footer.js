import './css/Footer.css';

function Footer() {
    return (
      <div className="Footer">
          <>
          <p className="auther">Emad Almajdalawi</p>
          <div className='contact'>
          <a href='http://www.facebook.com'>
            <img src={require('./imgs/facebook.png')} alt='Facebook' className='contImg'/> 
          </a>
          <a href='https://www.instagram.com'> 
            <img src={require('./imgs/instagram.png')} alt='Instagram' className='contImg'/> 
          </a>
          </div>
          </>
      </div>
    );
  }
  
  export default Footer;