import ImageCard from '../components/ImageCard';
import { useImages } from '../contexts/ImageContext';

function Favourites() {
  const { images, toggleLike } = useImages();
  const likedImages = images.filter((image) => image.isLiked);

  return (
    <div>
      {likedImages.map((image) => (
        <ImageCard image={image} onLike={() => toggleLike(image.id)} />
      ))}
    </div>
  );
}

export default Favourites;
