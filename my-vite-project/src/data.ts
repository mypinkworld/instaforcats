export interface Image {
  id: string;
  url: string;
  author: string;
  isLiked: boolean;
}

export const defaultImages: Image[] = [
  {
    id: '1',
    url: '/img1.jpg',
    author: 'Kiwi',
    isLiked: false,
  },
  {
    id: '2',
    url: '/img2.jpg',
    author: 'Taco',
    isLiked: false,
  },
  {
    id: '3',
    url: '/img3.jpg',
    author: 'Cissi',
    isLiked: false,
  },
  {
    id: '4',
    url: '/img4.jpg',
    author: 'Gubben',
    isLiked: false,
  },
  {
    id: '5',
    url: '/img5.jpg',
    author: 'Babsan',
    isLiked: false,
  },
  {
    id: '6',
    url: '/img6.jpg',
    author: 'Nikita',
    isLiked: false,
  },
];
