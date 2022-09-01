import React from 'react'
import DetailedInfo from '../components/DetailedInfo'
import DetailedReviews from '../components/DetailedReviews'
import ImageViewer from '../components/ImageViewer'

function DetailedView() {
  return (
    <div>
        <ImageViewer />
        <DetailedInfo />
        <DetailedReviews />
    </div>
  )
}

export default DetailedView