import { Image } from '../data';
import ImageCard from '../components/ImageCard';
import { useImages } from '../contexts/ImageContext';

function Home() {
  // Onödigt att använda en annan variabel för samma data, vilket ökar funktionens längd. jag hade   const { images, toggleLike } = useImages();

  const { images } = useImages();
  const { toggleLike } = useImages();

  // Onödigt att använda en ny rad för varje bild, gör koden mindre läsbar. inte  behövs sätta image:image då det redan är i ImageCard
  return (
    <div>
      {images.map((image: Image) => (<ImageCard image={image} onLike={() => toggleLike(image.id)} />))}
    </div>
  );
}

export default Home;
