import React, { useState} from 'react'
import "../styles/DetailedReviews.css"
import NewReview from "../components/NewReview"
import Review from "../components/Review"

function DetailedReviews(props) {
  return (
    <div className='DetailedReviews'>
      {props.art ? (      
      <>
      <h2>Reviews</h2>
      <NewReview reviews={props.reviews} setReviews={props.setReviews} objectID={props.art.objectID} key={props.art.title}/>
      {props.reviews.filter((review) => { return props.art.objectID === review.objectID}).map((review) => {
        return <Review review={review} key={props.art.objectID}/>
      })}
      </>
      ) : (<></>)}
    </div>
  )
}

export default DetailedReviews