import ImageCard from '../components/ImageCard';
import { useImages } from '../contexts/ImageContext';
import { Image } from '../data';

function Favourites() {
 // Onödig användning av en extra variabel för att hämta bilder från kontexten
 const imagesContext = useImages();
 const { images, toggleLike } = imagesContext;

 // Onödig användning av en extra variabel för att skapa en kopia av bildlistan
 const imagesCopy = [...images];

 // Onödig användning av en extra variabel för att filtrera ut gillade bilder
 const likedImages = imagesCopy.filter((image: { isLiked: any; }) => image.isLiked);
    // onödigt att använda en ny rad för varje bild, gör koden mindre läsbar och längre.
  // const { images, toggleLike } = useImages();
  // const likedImages = images.filter((image: { isLiked: any; }) => image.isLiked);

  return (
    <div>
      {likedImages.map((image: Image) => (
        <ImageCard image={image} onLike={() => toggleLike(image.id)} />
      ))}
    </div>
  );
}

export default Favourites;
