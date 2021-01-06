import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>WELCOME TO EVA ENTERTAINMENT SG!</h1>
        <h2>Your Preferred Global Made-To-Measure Wedding Planning & Events Management Partner</h2>
      </div>
    </div>

    <div className="two-col">
      <div className="left-col">
        <h3>ABOUT US</h3>
        <img src={require('../images/wallpaper02.jpg')}/>
        <p>Eva Entertainment SG is a one-stop event management company, offering full spectrum of high-quality services ranging from private, corporate, to life events.</p>
        <p>Our team is led by a team of determined and passionate event veterans, coming together to synergize our expertise and ideas to create wonders to solve our client’s challenges. With ample networking opportunities in the industry, we provide the best solutions and creativeness, rendering unforgettable moments for our clients.</p>
        <Link to="#"><button >Who We Are</button></Link>
      </div>
      <div className="right-col">
        <img src={require('../images/wallpaper02.jpg')}/>
      </div>
    </div>
    
    <div className="Services">
      <div className="ServicesGroup">
        <h3>Our Services</h3>
        <div className="ServiceCatGroup">
          <Link to="#">
            <div className="ServiceCat">
              <div className="ServiceCatIcon">CC</div>
              <p>CUSTOMISED CELEBRATIONS</p>
            </div>
          </Link>
          <Link to="#">
            <div className="ServiceCat">
              <div className="ServiceCatIcon">LSES</div>
              <p>YOUR LIFE STAGES ECO SYSTEM</p>
            </div>
          </Link>
          <Link to="#">
            <div className="ServiceCat">
              <div className="ServiceCatIcon">C</div>
              <p>CORPORATE</p>
            </div>
          </Link>
          <Link to="#">
            <div className="ServiceCat">
              <div className="ServiceCatIcon">TM</div>
              <p>TALENT MANAGEMENT</p>
            </div>
          </Link>
        </div>
        <Link to="/"><button>View All Services</button></Link>
      </div>
    </div>
  </div>
)

export default IndexPage
