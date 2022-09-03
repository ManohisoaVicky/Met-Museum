import React from 'react'
import DetailedReviews from '../components/DetailedReviews'
import ImageViewer from '../components/ImageViewer'

import "../styles/DetailedView.css"

function DetailedView() {
  return (
    <div className="DetailedView">
      <div className='top'>
        <ImageViewer />
        <div className='DetailedInfo'>
          <h1>Title</h1>
          <h2>Artist</h2>
          <h3>Culture</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum atque ullam maiores quasi rerum vero sint consequuntur, impedit earum et tempora reiciendis doloribus. Blanditiis harum deserunt neque facilis tempore ullam.
          Aspernatur suscipit cumque aliquam ab architecto sapiente officiis, facere nihil mollitia porro est sit temporibus corporis sequi soluta quasi? Non veritatis eligendi ab voluptas fugiat architecto libero, commodi aspernatur vitae!
          Ipsum, saepe voluptatibus provident expedita dolores fugit fugiat aliquam aliquid autem cupiditate ex, asperiores tempora velit sint ad.
          Sunt, fugit aperiam. Debitis tempore itaque exercitationem dolore labore. Molestiae, optio provident.
          Adipisci ut pariatur ex eveniet aperiam veniam, obcaecati nihil sequi quis, accusantium odio, omnis iste sunt veritatis maiores? Rerum velit autem facilis modi ut vero tenetur sunt qui nesciunt minus.
          Vel dignissimos temporibus quisquam consectetur aspernatur, asperiores praesentium possimus labore illum accusamus sint eum, illo, doloribus assumenda nemo sed quasi placeat inventore quia reiciendis laudantium perspiciatis perferendis in rerum. Porro.</p>
        </div>
      </div>
        <DetailedReviews />
    </div>
  )
}

export default DetailedView