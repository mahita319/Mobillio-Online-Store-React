import React from 'react'

import PropTypes from 'prop-types'

import './section-heading.css'

const SectionHeading = (props) => {
  return (
    <div
      id={props.sectionHeadingId}
      className={`section-heading-section-heading ${props.rootClassName} `}
    >
      <h1 className="section-heading-text1 Heading-2">{props.heading}</h1>
      <span className="section-heading-text2">{props.subtitle}</span>
    </div>
  )
}

SectionHeading.defaultProps = {
  sectionHeadingId: '',
  heading: 'TRENDING ITEMS',
  subtitle:
    '     Start shopping based on the categories you are interested in!',
  rootClassName: '',
}

SectionHeading.propTypes = {
  sectionHeadingId: PropTypes.string,
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SectionHeading
