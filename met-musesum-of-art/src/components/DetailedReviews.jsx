import React, { useState } from 'react'
import "../styles/DetailedReviews.css"
import NewReview from "../components/NewReview"
import Review from "../components/Review"

function DetailedReviews() {



  return (
    <div className='DetailedReviews'>
      <h2>Reviews</h2>
      <NewReview />
      <Review />
    </div>
  )
}

export default DetailedReviews