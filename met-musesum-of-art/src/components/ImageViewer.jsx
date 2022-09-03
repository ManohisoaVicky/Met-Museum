import React from 'react'
import { useState } from 'react';
import "../styles/ImageViewer.css"

function ImageViewer() {

  const [primaryImage, setPrimaryImage] = useState("https://images.metmuseum.org/CRDImages/aa/original/LC-1970_77-001.jpg")
  const [additionalImages, setAdditionalImages] = useState(
    [
    "https://images.metmuseum.org/CRDImages/aa/original/LC-1970_77-001.jpg" ,
    "https://images.metmuseum.org/CRDImages/dp/original/DP826241.jpg",
    "https://images.metmuseum.org/CRDImages/es/original/DP250149.jpg"
    ]
  )
  const [imageMargin, setImageMargin] = useState({x: 0, y: 0})

  function handleNewSelection (e) {
    setPrimaryImage(e.target.src)
  }
  
  function handleImageDrag (e) {
    console.log(e)
    if (e.target) {
      console.log(e)
      setImageMargin({x: -e.target.offsetLeft, y: -e.target.offsetTop})
    }
  }

  return (
    <div className="ImageViewer">
      <div className="ImageViewer-main-image-container">
        <img onMouseMove={handleImageDrag} onMouseOut={() => {setImageMargin({x: 0, y: 0})}} src={primaryImage} alt="" style={{marginLeft: imageMargin.x, marginTop: imageMargin.y }}/>
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