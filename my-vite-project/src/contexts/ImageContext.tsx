import { createContext, ReactNode, useContext, useState } from 'react';
import { defaultImages, Image } from '../data';

interface ContextValue {
  images: Image[];
  toggleLike: (id: string) => void;
}

export const ImageContext = createContext<ContextValue>(null as any);
export const useImages = () => useContext(ImageContext); // convenience hook

interface Props {
  children: ReactNode;
}

function ImageProvider({ children }: Props) {
  const [images, setImages] = useState(defaultImages);

  const toggleLike = (id: string) => {
    const updatedList = images.map((image) => {
      if (image.id !== id) return image;
      return { ...image, isLiked: !image.isLiked };
    });
    setImages(updatedList);
  };

  return (
    <ImageContext.Provider value={{ images, toggleLike }}>
      {children}
    </ImageContext.Provider>
  );
}

export default ImageProvider;
