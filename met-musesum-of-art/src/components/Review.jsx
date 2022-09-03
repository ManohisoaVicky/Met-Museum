import React from 'react'
import "../styles/Review.css"

function Review() {
  return (
    <div className='Review'>
      <div className='Review-user'>
        <div className='Review-user-icon'></div>
        <span>Manohisoa</span>
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
          <span>The review comment should be here</span>
          <span className='Review-comment-quotemark'>"</span>
        </div>  
      </div>
    </div>
  )
}

export default Review