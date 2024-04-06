import { CSSProperties } from 'react';
import { Image } from '../data';

interface Props {
  image: Image;
  onLike: () => void;
}

// : Lägg till felhantering med att hantera felaktiga egenskaper eller avsaknad av ett nödvändigt dataobjekt.

function ImageCard({ image, onLike }: Props) {
  return (
    <div style={{ position: 'relative' }}>
      <img style={imageStyle} src={`/publics/${image.url}`} alt={image.author} />
      <div style={overlayStyle}>
        <h2>{image.author}</h2>
        <h2 onClick={onLike}>{image.isLiked ? '🖤' : '🤍'}</h2>
      </div>
    </div>
  );
}



  // Onödig deklaration CSS stil här, eftersom det redan finns en global stil för det i CSS-filen

const overlayStyle: CSSProperties = {
  position: 'absolute',
  bottom: 0,
  left: '25%', 
  right: '25%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 1rem',
  background: '#000000AA',
  color: 'white',
};

const imageStyle: CSSProperties = {
  width: '50%',
  objectFit: 'contain',
  margin: 'auto',
  alignItems: 'center',
  display: 'flex',

};

export default ImageCard;
