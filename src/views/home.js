import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar5 from '../components/navbar5'
import SectionHeading from '../components/section-heading'
import CategoryCard from '../components/category-card'
import BlogPostCard from '../components/blog-post-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Mobillio Online Store</title>
        <meta property="og:title" content="Mobillio Online Store" />
      </Helmet>
      <Navbar5
        link1={
          <Fragment>
            <span className="home-text10">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11">Shop</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12">About</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13">Contact  </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text14">Shop</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text15">Menu</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text16">Specials</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text17">Contact</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text18">  Magical Treats</span>
          </Fragment>
        }
      ></Navbar5>
      <div className="home-main">
        <div className="home-hero1 section-container">
          <div className="home-max-width1 max-width-container">
            <div className="home-hero2">
              <div className="home-container11">
                <div className="home-info">
                  <img
                    alt="Rectangle43271305"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMicgaGVpZ2h0PSc1Micgdmlld0JveD0nMCAwIDIgNTInIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxyZWN0IHdpZHRoPScyJyBoZWlnaHQ9JzUyJyBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScwLjUnLz4KPC9zdmc+Cg=="
                    className="home-image1"
                  />
                  <span className="home-text19">
                    <span>Homemade Bakery</span>
                    <br></br>
                  </span>
                </div>
                <h1 className="home-text22">Orders</h1>
                <div className="home-container12">
                  <span className="home-text23">FROM</span>
                  <span className="home-text24">$5</span>
                </div>
                <div className="home-btn-group">
                  <a
                    href="https://form.jotform.com/243644531731050"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link10 button"
                  >
                    Explore the collection
                  </a>
                </div>
              </div>
              <img
                alt="image23271449"
                src="/3259-600w.jpg"
                className="home-image2"
              />
            </div>
          </div>
        </div>
        <div className="home-categories section-container column">
          <div className="home-max-width2 max-width-container">
            <SectionHeading
              heading="SHOP BY CATEGORIES"
              newProp="   Benefits of Baking"
              subtitle="Start shopping based on the categories you are interested in!"
            ></SectionHeading>
            <div className="home-cards-container">
              <a
                href="https://form.jotform.com/243644531731050"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link11"
              >
                <CategoryCard
                  name="Bites"
                  categoryImg="https://images.unsplash.com/photo-1576618148261-810425853baf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxkZXNzZXJ0JTIwYml0ZXN8ZW58MHx8fHwxNzM1NDQ1NjQ3fDA&amp;ixlib=rb-4.0.3&amp;h=2000"
                  className="home-component12"
                ></CategoryCard>
              </a>
              <a
                href="https://form.jotform.com/243644531731050"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link12"
              >
                <CategoryCard
                  name="Brownies"
                  categoryImg="https://images.unsplash.com/photo-1672867458764-2a04080005fe?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM4fHxicm93bmllc3xlbnwwfHx8fDE3MzQ5OTQxMTV8MA&amp;ixlib=rb-4.0.3&amp;w=1100"
                  rootClassName="category-cardroot-class-name"
                  className="home-component13"
                ></CategoryCard>
              </a>
              <a
                href="https://form.jotform.com/243644531731050"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link13"
              >
                <CategoryCard
                  name="Cookies"
                  categoryImg="https://images.unsplash.com/photo-1486893732792-ab0085cb2d43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxjb29raWVzfGVufDB8fHx8MTczNTQ4NzM4NHww&amp;ixlib=rb-4.0.3&amp;h=2000"
                  className="home-component14"
                ></CategoryCard>
              </a>
              <a
                href="https://form.jotform.com/243644531731050"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link14"
              >
                <CategoryCard
                  name="Tarts"
                  categoryImg="https://images.unsplash.com/photo-1646321155195-44f0a4f91d1b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxmcnVpdCUyMHRhcnRzfGVufDB8fHx8MTczNDk5NDIzN3ww&amp;ixlib=rb-4.0.3&amp;w=1100"
                  className="home-component15"
                ></CategoryCard>
              </a>
              <a
                href="https://form.jotform.com/243644531731050"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link15"
              >
                <CategoryCard
                  name="Cake Pops"
                  categoryImg="https://images.unsplash.com/photo-1586195830864-e4d9688815c8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGNha2UlMjBwb3BzfGVufDB8fHx8MTczNDk5NDI1NHww&amp;ixlib=rb-4.0.3&amp;w=1100"
                  className="home-component16"
                ></CategoryCard>
              </a>
            </div>
          </div>
          <div className="home-banner"></div>
          <img alt="image" src="/img_5010-200h.jpg" className="home-image3" />
          <div className="home-container13 max-width-container">
            <span className="home-text25">
                   Magical Treats is a delightful bakery that specializes in
              creating mouthwatering treats.Our baked goods are made with love
              and the finest ingredients to ensure a magical experience within
              every bite. Order from us to indulge in a sweet escape from the
              ordinary!
            </span>
            <div className="home-container14"></div>
          </div>
        </div>
        <div className="home-full-width-banner section-container">
          <div className="home-left">
            <div className="home-content">
              <span className="home-text26">Most Popular</span>
              <span className="home-text27">
                  Our carefully handmade ferrero rocher cookies are  a customer
                favorite!
              </span>
            </div>
            <div className="home-btn button">
              <a
                href="https://form.jotform.com/243644531731050"
                target="_blank"
                rel="noreferrer noopener"
                className="home-text28"
              >
                Explore now
              </a>
            </div>
          </div>
          <img
            alt="Rectangle13271410"
            src="https://images.unsplash.com/photo-1590080874088-eec64895b423?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGZlcnJhcm8lMjByb2NoZXIlMjBjb29raWVzfGVufDB8fHx8MTczNDk5NTAwNnww&amp;ixlib=rb-4.0.3&amp;w=1500"
            className="home-image4"
          />
        </div>
        <div className="section-container home-blog">
          <div className="max-width-container home-max-width3">
            <SectionHeading
              heading="Our blog"
              subtitle="Read the latest bakery and food related articles!"
              rootClassName="section-headingroot-class-name"
              sectionHeadingId="SectionHeading"
            ></SectionHeading>
            <div className="home-container15">
              <BlogPostCard
                title="Special combinations for nature lovers"
                linkTo="https://www.usfoods.com/great-food/food-trends/4-bakery-trends-for-restaurants-in-2024.html"
                newProp="        2024's Most Popular Baked Goods"
                imageSrc="https://images.unsplash.com/photo-1564845574945-61333c86cce0?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGNyb251dHxlbnwwfHx8fDE3MzUxNzQ0NDN8MA&amp;ixlib=rb-4.0.3&amp;w=1400"
                description="           Learn about the most recent trending baked goods!"
              ></BlogPostCard>
              <BlogPostCard
                linkTo="https://www.nytimes.com/2017/04/26/magazine/baking-is-all-in-the-hands.html"
                newProp="        Why Should I Bake?"
                imageSrc="https://images.unsplash.com/photo-1577048982771-1960014bde8b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHBlb3BsZSUyMGJha2luZ3xlbnwwfHx8fDE3MzUxNzY1MzN8MA&amp;ixlib=rb-4.0.3&amp;w=1400"
                description="           Learn about the most recent trending baked goods!"
                rootClassName="blog-post-cardroot-class-name"
              ></BlogPostCard>
              <BlogPostCard
                title="Unique natural color combinations"
                newProp="         Benefits of Baking"
                imageSrc="https://images.unsplash.com/photo-1604881748185-46bff830c5f8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fGJha2luZ3xlbnwwfHx8fDE3MzUxNzcwMTh8MA&amp;ixlib=rb-4.0.3&amp;w=1400"
                description="            A bittersweet story on the joy of baking."
                blogPostCardId="BlogPostCard"
              ></BlogPostCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer1">
        <div className="home-max-width4 max-width-container">
          <footer className="home-footer2">
            <div className="home-links-container">
              <div className="home-container16">
                <span className="home-text29">Categories</span>
                <a
                  href="https://form.jotform.com/243644531731050"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link16"
                >
                  Bites
                </a>
                <a
                  href="https://form.jotform.com/243644531731050"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link17"
                >
                  Brownies
                </a>
                <a
                  href="https://form.jotform.com/243644531731050"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link18"
                >
                  Cookies
                </a>
                <a
                  href="https://form.jotform.com/243644531731050"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link19"
                >
                  Tarts
                </a>
                <a
                  href="https://form.jotform.com/243644531731050"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link20"
                >
                  Cake Pops
                </a>
              </div>
              <div className="home-container17">
                <span className="home-text30">Company</span>
                <a
                  href="https://form.jotform.com/243644531731050"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link21"
                >
                  Shop
                </a>
                <Link to="/about-us" className="home-navlink">
                  About
                </Link>
                <a href="#BlogPostCard" className="home-link22">
                  Blog
                </a>
              </div>
              <div className="home-container18">
                <span className="home-text31">Resources</span>
                <a
                  href="mailto:k2.anshita@gmail.com?subject=Support"
                  className="home-link23"
                >
                  Contact us
                </a>
                <a
                  href="https://form.jotform.com/243644531731050"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link24"
                >
                  Order
                </a>
              </div>
            </div>
            <div className="home-container19">
              <h3 className="home-text32">Magical Treats</h3>
              <a href="tel:831-512-4500" className="home-link25">
                (831)-512-4500
              </a>
              <a
                href="mailto:k2.anshita@gmail.com?subject="
                className="home-link26"
              >
                k2.anshita@gmail.com
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Home
