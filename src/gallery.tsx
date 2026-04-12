import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import GalleryApp from './GalleryApp.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GalleryApp />
  </StrictMode>,
);