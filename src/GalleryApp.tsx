import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import DomeGallery from './components/DomeGallery';
import { CHARACTERS } from './constants';

export default function GalleryApp() {
  const images = CHARACTERS.map(char => ({
    src: char.image,
    alt: char.name,
    description: char.description,
    background: char.background,
    keywords: char.keywords,
    modernText: char.modernText,
    traditionalText: char.traditionalText
  }));

  return (
    <div className="relative w-screen h-screen bg-[#050505] overflow-hidden">
      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => window.location.href = 'index.html?skipIntro=true'}
        className="absolute top-8 left-8 z-50 flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-bold uppercase tracking-widest">返回</span>
      </motion.button>

      <DomeGallery 
        images={images}
        fit={0.8} 
        minRadius={600} 
        maxVerticalRotationDeg={0} 
        segments={34} 
        dragDampening={2} 
        openedImageWidth={null}
        openedImageHeight={null}
        grayscale
      />
    </div>
  );
}
