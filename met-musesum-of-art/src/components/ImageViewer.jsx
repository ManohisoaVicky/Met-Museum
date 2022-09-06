import React from 'react'
import { useState } from 'react';
import "../styles/ImageViewer.css"

function ImageViewer( { art } ) {

  const [primaryImage, setPrimaryImage] = useState(art.primaryImage)
  const [additionalImages] = useState([art.primaryImage, ...art.additionalImages])

  function handleNewSelection (e) {
    setPrimaryImage(e.target.src)
  }

  return (
    <div className="ImageViewer">
      <div className="ImageViewer-main-image-container">
        <img  src={primaryImage} alt=""/>
        </div>
      <div className="ImageViewer-additional-image-container">
        {additionalImages.map((url, index) => {
          if (primaryImage === url) {
            return (<img className='selected' src={url} alt="" onClick={handleNewSelection} key={index}/>)
          } else {
            return (<img src={url} alt="" onClick={handleNewSelection} key={index}/>)
          }
        })}
      </div>
    </div>
  )
}

export default ImageViewer