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
    console.log(review)
  }

  function handleChange (e) {
    setReview({...review, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // props.setReviews((prevReviews) => prevReviews.push(review))
    props.setReviews([...props.reviews, {...review}])
  }

  return (
    <div className='NewReview'>
      <div className='NewReview-user'>
        <div className='NewReview-user-icon'></div>
        <label>
          <input name='user' value={review.user} onChange={handleChange} />
        </label>
      </div>
      <form className='NewReview-content'onSubmit={handleSubmit}>
        <label className='NewReview-star-rating'>      
          <div className='star-container'>
            {stars.map((num) => {
              if (num <= review.rating) {
                return (<span class="material-symbols-outlined star fill" key={num} id={num} onClick={handleStarClick}>star</span>)
              } else {
                return (<span class="material-symbols-outlined star" key={num} id={num} onClick={handleStarClick}>star</span>)
              }
            })}
          </div>
        </label>
        <label className='NewReview-comment'>
          <textarea name='comment' value={review.comment} onChange={handleChange} placeholder='Enter your comments here.'/>
        </label>
        <button>Post</button>
      </form>
    </div>
  )
}

export default NewReview