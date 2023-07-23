import './App.css'
import Navbar from './components/Navbar'

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

  Shorten a link here...

  Shorten It!

  Advanced Statistics

  Track how your links are performing across the web with our 
  advanced statistics dashboard.

  Brand Recognition

  Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.

  Detailed Records

  Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.

  Fully Customizable

  Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.

  Boost your links today

  Get Started

  Features

  Link Shortening
  Branded Links
  Analytics

  Resources

  Blog
  Developers
  Support

  Company

  About
  Our Team
  Careers
  Contact
  
  <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>
    </>
  )
}

export default App
