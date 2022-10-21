import "./style.scss"
import GalleryItems from "constants/gallery"

const generateGallery = () =>
  GalleryItems.map((data, index) => (
    <div key={index} className="gallery-item">
      <img src={data} alt="llama gang" />
    </div>
  ))

const Gallery = () => (
  <div className="gallery ">
    <div className="gallery-wrapper flex">{generateGallery()}</div>
  </div>
)

export default Gallery
