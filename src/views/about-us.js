import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar5 from '../components/navbar5'
import './about-us.css'

const AboutUs = (props) => {
  return (
    <div className="about-us-container1">
      <Helmet>
        <title>About-Us - Mobillio Online Store</title>
        <meta property="og:title" content="About-Us - Mobillio Online Store" />
      </Helmet>
      <header
        data-role="Header"
        className="about-us-header max-width-container"
      >
        <div className="about-us-container2">
          <Navbar5
            link1={
              <Fragment>
                <span className="about-us-text10">Home</span>
              </Fragment>
            }
            link2={
              <Fragment>
                <span className="about-us-text11">Shop</span>
              </Fragment>
            }
            link3={
              <Fragment>
                <span className="about-us-text12">About</span>
              </Fragment>
            }
            link4={
              <Fragment>
                <span className="about-us-text13">Contact  </span>
              </Fragment>
            }
            page1={
              <Fragment>
                <span className="about-us-text14">Shop</span>
              </Fragment>
            }
            page2={
              <Fragment>
                <span className="about-us-text15">Menu</span>
              </Fragment>
            }
            page3={
              <Fragment>
                <span className="about-us-text16">Specials</span>
              </Fragment>
            }
            page4={
              <Fragment>
                <span className="about-us-text17">Contact</span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="about-us-text18">  Magical Treats</span>
              </Fragment>
            }
            rootClassName="navbar5root-class-name"
          ></Navbar5>
        </div>
      </header>
      <span className="about-us-text19">About Us</span>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1534432182912-63863115e106?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxiYWtlcnklMjB0cmVhdHN8ZW58MHx8fHwxNzM2NjA3NzUzfDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;h=500"
        className="about-us-image"
      />
      <span className="about-us-text20">
        At Magical Treats, we believe in the power of baking to create moments
        of joy and wonder. Our passion for crafting delicious and enchanting
        treats is what sets us apart. We pour our hearts into every creation,
        infusing it with love and creativity to bring a little bit of magic into
        your life. Join us on this whimsical journey as we spread happiness one
        treat at a time.
      </span>
    </div>
  )
}

export default AboutUs
