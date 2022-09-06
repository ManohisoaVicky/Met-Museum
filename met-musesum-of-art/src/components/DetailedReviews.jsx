import React, { useState} from 'react'
import "../styles/DetailedReviews.css"
import NewReview from "../components/NewReview"
import Review from "../components/Review"

function DetailedReviews(props) {

  console.log(props.reviews)
  console.log(props.art)
  

  return (
    <div className='DetailedReviews'>
      {props.art ? (      
      <>
      <h2>Reviews</h2>
      <NewReview reviews={props.reviews} setReviews={props.setReviews} objectID={props.art.objectID}/>
      {props.reviews.filter((review) => { return props.art.objectID === review.objectID}).map((review) => {
        return <Review review={review}/>
      })}
      </>
      ) : (<></>)}
    </div>
  )
}

export default DetailedReviews