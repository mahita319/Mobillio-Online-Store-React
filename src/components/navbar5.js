import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar5.css'

const Navbar5 = (props) => {
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  return (
    <header className={`navbar5-container10 ${props.rootClassName} `}>
      <span className="navbar5-text10">
        {props.text1 ?? (
          <Fragment>
            <span className="navbar5-text14">  Magical Treats</span>
          </Fragment>
        )}
      </span>
      <header data-thq="thq-navbar" className="navbar5-navbar-interactive">
        {link5DropdownVisible && (
          <div
            onClick={() => setLink5DropdownVisible(false)}
            className="navbar5-container11"
          ></div>
        )}
        <div className="navbar5-container12">
          <div data-thq="thq-navbar-nav" className="navbar5-desktop-menu">
            <nav className="navbar5-links1">
              <Link to="/" className="navbar5-link11 thq-link thq-body-small">
                {props.link1 ?? (
                  <Fragment>
                    <span className="navbar5-text11">Home</span>
                  </Fragment>
                )}
              </Link>
              <a
                href="https://form.jotform.com/243644531731050"
                target="_blank"
                rel="noreferrer noopener"
                className="navbar5-link21 thq-link thq-body-small"
              >
                {props.link2 ?? (
                  <Fragment>
                    <span className="navbar5-text15">Shop</span>
                  </Fragment>
                )}
              </a>
              <Link
                to="/about-us"
                className="navbar5-link31 thq-link thq-body-small"
              >
                {props.link3 ?? (
                  <Fragment>
                    <span className="navbar5-text16">About</span>
                  </Fragment>
                )}
              </Link>
              <a
                href="mailto:k2.anshita@gmail.com?subject="
                className="navbar5-link41 thq-link thq-body-small"
              >
                {props.link4 ?? (
                  <Fragment>
                    <span className="navbar5-text12">Contact  </span>
                  </Fragment>
                )}
              </a>
              <div className="navbar5-container13">
                {link5DropdownVisible && (
                  <div className="navbar5-container14 thq-box-shadow">
                    <div className="navbar5-menu-item1">
                      <div className="navbar5-content1">
                        <a
                          href={props.linkUrlPage1}
                          className="navbar5-page11 thq-body-large"
                        >
                          {props.page1 ?? (
                            <Fragment>
                              <span className="navbar5-text13">Shop</span>
                            </Fragment>
                          )}
                        </a>
                      </div>
                    </div>
                    <div className="navbar5-menu-item2">
                      <div className="navbar5-content2">
                        <a
                          href={props.linkUrlPage2}
                          className="navbar5-page21 thq-body-large"
                        >
                          {props.page2 ?? (
                            <Fragment>
                              <span className="navbar5-text19">Menu</span>
                            </Fragment>
                          )}
                        </a>
                      </div>
                    </div>
                    <div className="navbar5-menu-item3">
                      <div className="navbar5-content3">
                        <a
                          href={props.linkUrlPage3}
                          className="navbar5-page31 thq-body-large"
                        >
                          {props.page3 ?? (
                            <Fragment>
                              <span className="navbar5-text17">Specials</span>
                            </Fragment>
                          )}
                        </a>
                      </div>
                    </div>
                    <div className="navbar5-menu-item4">
                      <div className="navbar5-content4">
                        <a
                          href={props.linkUrlPage4}
                          className="navbar5-page41 thq-body-large"
                        >
                          {props.page4 ?? (
                            <Fragment>
                              <span className="navbar5-text18">Contact</span>
                            </Fragment>
                          )}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
        <div className="navbar5-container15">
          <div className="navbar5-container16">
            <div
              data-thq="thq-burger-menu"
              className="navbar5-burger-menu"
            ></div>
            <a href="tel:831-240-3673" className="navbar5-link">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="navbar5-icon10"
              >
                <path
                  d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.98.98 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02c-.37-1.11-.56-2.3-.56-3.53c0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar5-mobile-menu">
          <div className="navbar5-nav">
            <div className="navbar5-top">
              <div data-thq="thq-close-menu" className="navbar5-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar5-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar5-links2">
              <Link to="/" className="navbar5-link12 thq-link thq-body-small">
                {props.link1 ?? (
                  <Fragment>
                    <span className="navbar5-text11">Home</span>
                  </Fragment>
                )}
              </Link>
              <a
                href="https://form.jotform.com/243644531731050"
                target="_blank"
                rel="noreferrer noopener"
                className="navbar5-link22 thq-link thq-body-small"
              >
                {props.link2 ?? (
                  <Fragment>
                    <span className="navbar5-text15">Shop</span>
                  </Fragment>
                )}
              </a>
              <Link
                to="/about-us"
                className="navbar5-link32 thq-link thq-body-small"
              >
                {props.link3 ?? (
                  <Fragment>
                    <span className="navbar5-text16">About</span>
                  </Fragment>
                )}
              </Link>
              <div className="navbar5-link4-accordion">
                <div
                  onClick={() => setLink5AccordionOpen(!link5AccordionOpen)}
                  className="navbar5-trigger"
                >
                  <a
                    href="tel:832-240-3673"
                    className="navbar5-link42 thq-link thq-body-small"
                  >
                    {props.link4 ?? (
                      <Fragment>
                        <span className="navbar5-text12">Contact  </span>
                      </Fragment>
                    )}
                  </a>
                  <div className="navbar5-icon-container">
                    {link5AccordionOpen && (
                      <div className="navbar5-container17">
                        <svg viewBox="0 0 1024 1024" className="navbar5-icon14">
                          <path d="M298 426h428l-214 214z"></path>
                        </svg>
                      </div>
                    )}
                    {!link5AccordionOpen && (
                      <div className="navbar5-container18">
                        <svg viewBox="0 0 1024 1024" className="navbar5-icon16">
                          <path d="M426 726v-428l214 214z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {link5AccordionOpen && (
                  <div className="navbar5-container19">
                    <div className="navbar5-menu-item5">
                      <div className="navbar5-content5">
                        <a
                          href={props.linkUrlPage1}
                          className="navbar5-page12 thq-body-large"
                        >
                          {props.page1 ?? (
                            <Fragment>
                              <span className="navbar5-text13">Shop</span>
                            </Fragment>
                          )}
                        </a>
                      </div>
                    </div>
                    <div className="navbar5-menu-item6">
                      <div className="navbar5-content6">
                        <a
                          href={props.linkUrlPage2}
                          className="navbar5-page22 thq-body-large"
                        >
                          {props.page2 ?? (
                            <Fragment>
                              <span className="navbar5-text19">Menu</span>
                            </Fragment>
                          )}
                        </a>
                      </div>
                    </div>
                    <div className="navbar5-menu-item7">
                      <div className="navbar5-content7">
                        <a
                          href={props.linkUrlPage3}
                          className="navbar5-page32 thq-body-large"
                        >
                          {props.page3 ?? (
                            <Fragment>
                              <span className="navbar5-text17">Specials</span>
                            </Fragment>
                          )}
                        </a>
                      </div>
                    </div>
                    <div className="navbar5-menu-item8">
                      <div className="navbar5-content8">
                        <a
                          href={props.linkUrlPage4}
                          className="navbar5-page42 thq-body-large"
                        >
                          {props.page4 ?? (
                            <Fragment>
                              <span className="navbar5-text18">Contact</span>
                            </Fragment>
                          )}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>
            <div className="navbar5-container20"></div>
          </div>
          <div className="navbar5-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="thq-icon-x-small"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="navbar5-icon20 thq-icon-x-small"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="navbar5-icon22 thq-icon-x-small"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar5.defaultProps = {
  link1: undefined,
  link4: undefined,
  page1: undefined,
  text1: undefined,
  link2: undefined,
  link3: undefined,
  rootClassName: '',
  page3: undefined,
  linkUrlPage3: 'https://www.teleporthq.io',
  linkUrlPage1: 'https://www.teleporthq.io',
  linkUrlPage2: 'https://www.teleporthq.io',
  page4: undefined,
  page2: undefined,
  linkUrlPage4: 'https://www.teleporthq.io',
}

Navbar5.propTypes = {
  link1: PropTypes.element,
  link4: PropTypes.element,
  page1: PropTypes.element,
  text1: PropTypes.element,
  link2: PropTypes.element,
  link3: PropTypes.element,
  rootClassName: PropTypes.string,
  page3: PropTypes.element,
  linkUrlPage3: PropTypes.string,
  linkUrlPage1: PropTypes.string,
  linkUrlPage2: PropTypes.string,
  page4: PropTypes.element,
  page2: PropTypes.element,
  linkUrlPage4: PropTypes.string,
}

export default Navbar5
