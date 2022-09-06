import React from 'react'
import "../styles/Review.css"

function Review(props) {
  return (
    <div className='Review'>
      <div className='Review-user'>
        <div className='Review-user-icon'></div>
        <span>{props.review.user}</span>
      </div>
      <div className='Review-content'>
        <div className='Review-star-rating'>
          <div className='star-container'>
            <div className='star'></div>
            <div className='star'></div>
            <div className='star'></div>
            <div className='star'></div>
            <div className='star'></div>
          </div>
        </div>
        <div className='Review-comment'>
          <span className='Review-comment-quotemark'>"</span>
          <span>{props.review.comment}</span>
          <span className='Review-comment-quotemark'>"</span>
        </div>  
      </div>
    </div>
  )
}

export default Review