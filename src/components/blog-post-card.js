import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card.css'

const BlogPostCard = (props) => {
  return (
    <div
      id={props.blogPostCardId}
      className={`blog-post-card-blog-post-card ${props.rootClassName} `}
    >
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="blog-post-card-image"
      />
      <div className="blog-post-card-container">
        <span className="blog-post-card-text1">{props.newProp}</span>
        <span className="blog-post-card-text2">{props.description}</span>
        <a
          href={props.linkTo}
          target="_blank"
          rel="noreferrer noopener"
          className="button"
        >
                 Read more
        </a>
      </div>
    </div>
  )
}

BlogPostCard.defaultProps = {
  blogPostCardId: '',
  imageAlt: 'image',
  rootClassName: '',
  newProp: 'Chic sofa designs for 2022',
  imageSrc:
    'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHZlbmljZXxlbnwwfHx8fDE2MjYyNzIyOTA&ixlib=rb-1.2.1&w=1500',
  description: '           Learn about the most recent trending baked goods!',
  linkTo: '',
}

BlogPostCard.propTypes = {
  blogPostCardId: PropTypes.string,
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  newProp: PropTypes.string,
  imageSrc: PropTypes.string,
  description: PropTypes.string,
  linkTo: PropTypes.string,
}

export default BlogPostCard
