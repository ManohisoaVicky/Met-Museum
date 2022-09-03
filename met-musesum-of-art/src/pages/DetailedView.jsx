import React from 'react'
import DetailedInfo from '../components/DetailedInfo'
import DetailedReviews from '../components/DetailedReviews'
import ImageViewer from '../components/ImageViewer'

import "../styles/DetailedView.css"

function DetailedView() {
  return (
    <div className="DetailedView">
        <ImageViewer />
        <DetailedInfo />
        <DetailedReviews />
    </div>
  )
}

export default DetailedView