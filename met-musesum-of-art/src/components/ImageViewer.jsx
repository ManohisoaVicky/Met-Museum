import React from 'react'
import { useState } from 'react';
import "../styles/ImageViewer.css"

function ImageViewer( { art } ) {

  const [primaryImage, setPrimaryImage] = useState(art.primaryImage)
  const [additionalImages, setAdditionalImages] = useState([art.primaryImage, ...art.additionalImages])

  function handleNewSelection (e) {
    setPrimaryImage(e.target.src)
  }

  return (
    <div className="ImageViewer">
      <div className="ImageViewer-main-image-container">
      {/* <div onMouseOver={handleImageDrag} onMouseOut={() => {setImageMargin({x: 0, y: 0})}} className="ImageViewer-main-image-container"> */}
        <img  src={primaryImage} alt=""/>
        </div>
      <div className="ImageViewer-additional-image-container">
        {additionalImages.map((url) => {
          if (primaryImage === url) {
            return (<img className='selected' src={url} alt="" onClick={handleNewSelection}/>)
          } else {
            return (<img src={url} alt="" onClick={handleNewSelection}/>)
          }
        })}
      </div>
    </div>
  )
}

export default ImageViewer