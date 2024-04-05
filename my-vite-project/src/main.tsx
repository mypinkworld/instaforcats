import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from './App';
import ImageProvider from './contexts/ImageContext';
import './index.css';
import Favourites from './pages/Favourites';
import Home from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="favourites" element={<Favourites />} />
    </Route>
  )
);
const rootElement = document.getElementById('root') as HTMLElement;

// Onödig deklaration av rootElement, eftersom den endast används en gång
const root = ReactDOM.createRoot(rootElement);

// Onödigt av strictMode, eftersom den endast används en gång
const strictMode = (
  <React.StrictMode>
    <ImageProvider>
      <RouterProvider router={router} />
    </ImageProvider>
  </React.StrictMode>
);

// Onödig användning av render för att rendera strictMode till root, eftersom det kan göras direkt med ReactDOM.createRoot
root.render(strictMode);
