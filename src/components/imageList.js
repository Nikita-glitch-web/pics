import './ImageList.css'
import ImageShow from "./imageShow";

function imageList({ images }) {
    const renderedImages = images.map((image, index) => {
        return <ImageShow key={image.id} image={image} />
    }) 
    
  return <div className="image-list">{renderedImages}</div>;
}

export default imageList;
