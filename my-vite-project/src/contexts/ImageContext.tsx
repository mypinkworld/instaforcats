import { createContext, ReactNode, useContext, useState } from 'react';
import { defaultImages } from '../data';

// Förbättring: använda export för att tydligt visa vilka komponenter och funktioner som skickas ut från den här filen.  hade använt mig av interface och gett contextValue null as any
const ImageContext = createContext<any>(null);
export const useImages = () => useContext(ImageContext);

// Dela upp ImageProvider i mindre komponenter för att göra koden mer läsbar och underhållbar. Använda interface Props för att tydligt visa vilka props som krävs 
function ImageProvider({ children }: { children: ReactNode }) {
  const [images, setImages] = useState(defaultImages);

  // kortaner funktionens längd genom att extrahera logiken till separata funktioner.
  const toggleLike = (id: string) => {
    const updatedList = images.map((image) => {
      if (image.id !== id) return image;
      return { ...image, isLiked: !image.isLiked };
    });
    setImages(updatedList);
  };

  // Förbättring:Användning av useEffect:
  return (
    <ImageContext.Provider value={{ images, toggleLike }}>
      {children}
    </ImageContext.Provider>
  );
}

export default ImageProvider;
