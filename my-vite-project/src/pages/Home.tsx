import ImageCard from '../components/ImageCard';
import { useImages } from '../contexts/ImageContext';

function Home() {
  const { images, toggleLike } = useImages();
  return (
    <div>
      {images.map((image) => (
        <ImageCard image={image} onLike={() => toggleLike(image.id)} />
      ))}
    </div>
  );
}

export default Home;
