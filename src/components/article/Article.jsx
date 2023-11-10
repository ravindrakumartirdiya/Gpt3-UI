import React from 'react';
import './article.css'

const Article = ({ image, pubDate, title, text }) => {
  return (
    <div className='gpt3__article'>
      <div className='gpt3__article_section-img'>
        <img src={image} alt='fImge' />
      </div>
      <div className='gpt3__article_section-text'>
        <div className='gpt3__article_section-text-part'>
          <h5>{pubDate}</h5>
          <h3>{title}</h3>
        </div>
        <div className="gpt3__article_section-text-part">
        <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Article;