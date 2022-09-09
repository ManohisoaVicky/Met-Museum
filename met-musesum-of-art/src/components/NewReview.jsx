import React, { useState }  from 'react'
import "../styles/NewReview.css"

function NewReview(props) {

  const stars = [1, 2, 3, 4, 5];
  const [review, setReview] = useState({
    objectID: props.objectID,
    user: "",
    rating: 1,
    comment: ""
  })
  
  function handleStarClick (e) {
    setReview({...review, rating: parseInt(e.target.id) })
  }

  function handleChange (e) {
    setReview({...review, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.setReviews([...props.reviews, {...review}])
  }

  return (
    <form className='NewReview' onSubmit={handleSubmit} key={props.objectID}>
      <div className='NewReview-container' >
        <div className='NewReview-user'>
          <div className='NewReview-user-icon'></div>
          <label><input name='user' value={review.user} onChange={handleChange} /></label>
        </div>
        <div className='NewReview-content'>
          <div className='star-container'>
            {stars.map((num) => {
              if (num <= review.rating) {
                return (<span className="material-symbols-outlined star fill" key={num} id={num} onClick={handleStarClick}>star</span>)
              } else {
                return (<span className="material-symbols-outlined star" key={num} id={num} onClick={handleStarClick}>star</span>)
              }
            })}
          </div>
          <label className='NewReview-comment'>
            <textarea name='comment' value={review.comment} onChange={handleChange} placeholder='Enter your comments here.'/>
          </label>                   
        </div>
      </div>
      <button>Submit Review</button>
    </form>
  )
}

export default NewReview