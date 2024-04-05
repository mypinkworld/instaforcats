import { CSSProperties } from 'react';
import { Image } from '../data';

interface Props {
  image: Image;
  onLike: () => void;
}


function ImageCard({ image, onLike }: Props) {
  return (
    <div style={{ position: 'relative' }}>
      <img style={imageStyle} src={image.url} alt={image.author} />
      <div style={overlayStyle}>
        <h2>{image.author}</h2>
        <h2 onClick={onLike}>{image.isLiked ? '🖤' : '🤍'}</h2>
      </div>
    </div>
  );
}

const containerStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  height: '100vh', // Detta gör att containern tar upp hela skärmens höjd
};

const overlayStyle: CSSProperties = {
  position: 'absolute',
  bottom: 0,
  left: '25%', // Centrera överlägget horisontellt
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
