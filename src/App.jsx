import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import Navbar from './components/Navbar'
import { faFacebookSquare, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons'

function App() {

  return (
    <>
      <Navbar />
      <section className='header-section'>
        <div className='header-description'>
          <h1 className='header-title'>More than just shorter links</h1>
          <p className='header-text'>
            Build your brand's recognition and get detailed insights 
            on how your links are performing.
          </p>
          <button className='get-started-btn '>Get Started</button>
        </div>
        <img className='header-img' src='/images/illustration-working.svg'></img>
      </section>
      <div className='url-shorter'>
          Shorten a link here...

            Shorten It!
      </div>
      <section className='stats'>
        <h1 className='stats-title'>Advanced Statistics</h1>
        <p className='stats-text'>
          Track how your links are performing across the web with our 
          advanced statistics dashboard.
        </p>
        <div className='stats-items-wrapper'>
          <div className='connector'></div>
          <div className='stats-item stats-1'>
            <div className='stats-img-wrapper'>
              <img className='stats-item-img' src='/images/icon-brand-recognition.svg' alt='Icon Brand Recognition'/>
            </div>
            <h2 className='stats-item-title'>Brand Recognition</h2>
            <p className='stats-item-text'>
              Boost your brand recognition with each click. Generic links don’t 
              mean a thing. Branded links help instil confidence in your content.
            </p>
          </div>
          <div className='stats-item stats-2'>
            <div className='stats-img-wrapper'>
              <img className='stats-item-img' src='/images/icon-detailed-records.svg' alt='Icon Detailed Records'/>
            </div>
            <h2 className='stats-item-title'>Detailed Records</h2>
            <p className='stats-item-text'>
              Gain insights into who is clicking your links. Knowing when and where 
              people engage with your content helps inform better decisions.
            </p>
          </div>
          <div className='stats-item stats-3'>
            <div className='stats-img-wrapper'>
              <img className='stats-item-img' src='/images/icon-fully-customizable.svg' alt='Icon Fully Customizable' />
            </div>
            <h2 className='stats-item-title'>Fully Customizable</h2>
            <p className='stats-item-text'>
              Improve brand awareness and content discoverability through customizable 
              links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>
      <section className='boost-section'>
        <h1 className='boost-title'> Boost your links today</h1>
        <button className='get-started-btn '>Get Started</button>
      </section>
      <section className='footer-section'>
        <div className='footer-content'>
          <img className='footer-logo' src='/images/logo.svg'></img>
          <div className='links-section'>
            <h2 className='links-section-title'>Features</h2>
            <a>Link Shortening</a>
            <a>Branded Links</a>
            <a>Analytics</a>
          </div>
          <div className='links-section'>
            <h2 className='links-section-title'>Resources</h2>
            <a>Blog</a>
            <a>Developers</a>
            <a>Support</a>
          </div>
          <div className='links-section'>
            <h2 className='links-section-title'>Company</h2>
            <a>About</a>
            <a>Our Team</a>
            <a>Careers</a>
            <a>Contact</a>
          </div>
          <div className='socials'>
            <FontAwesomeIcon icon={faFacebookSquare} size='xl' className='social-icon'/>
            <FontAwesomeIcon icon={faTwitter} size='xl' className='social-icon'/>
            <FontAwesomeIcon icon={faPinterest} size='xl' className='social-icon' />
            <FontAwesomeIcon icon={faInstagram} size='xl' className='social-icon' />
          </div>
        </div>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/aveandrian">aveandrian</a>.
        </div>
      </section>
  
  
    </>
  )
}

export default App
