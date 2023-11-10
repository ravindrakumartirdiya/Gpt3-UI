import React from 'react';
import "./blog.css";
import Article from "../../components/article/Article";
import arImage1 from "../../assets/blog01.png";
import arImage2 from "../../assets/blog02.png";
import arImage3 from "../../assets/blog03.png";
import arImage4 from "../../assets/blog04.png";
import arImage5 from "../../assets/blog05.png";


function Blog() {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening,</h1>
        <h1 className='gradient__text'>We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog_container-group_A'>
          <Article image={arImage1} pubDate="Dec 22,2000" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            text="Read Full Article" />
        </div>
        <div className='gpt3__blog_container-group_B'>
          <div className='gpt3__blog_container_group_B-div'>
            <Article image={arImage2} pubDate="Dec 22,2000" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
              text="Read Full Article" />
            <Article image={arImage3} pubDate="Sep 26,2000" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
              text="Read Full Article" />
          </div>

          <div className='gpt3__blog_container_group_B-div'>
            <Article image={arImage4} pubDate="Dec 22,2000" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
              text="Read Full Article" />
            <Article image={arImage5} pubDate="Sep 26,2000" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
              text="Read Full Article" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Blog;
