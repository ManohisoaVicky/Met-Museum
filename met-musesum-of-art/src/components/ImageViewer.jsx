import React from 'react'
import "../styles/ImageViewer.css"

function ImageViewer() {
  return (
    <div className="ImageViewer">
      <div className="ImageViewer-main-image-container">
        <img src="https://images.metmuseum.org/CRDImages/aa/original/LC-1970_77-001.jpg" alt=""/>
        </div>
      <div className="ImageViewer-additional-image-container">
        <img src="https://images.metmuseum.org/CRDImages/aa/original/LC-1970_77-001.jpg" alt=""/>
        <img src="https://images.metmuseum.org/CRDImages/dp/original/DP826241.jpg" alt=""/>
        <img src="https://images.metmuseum.org/CRDImages/es/original/DP250149.jpg" alt=""/>
      </div>
    </div>
  )
}

export default ImageViewer