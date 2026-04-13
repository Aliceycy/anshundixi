import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';
import bgAudio from '../assets/开头唱段_缩混.mp3';
import Prism from './Prism';

interface IntroProps {
  onComplete: () => void;
}

const TEXT_STEPS = [
  "金戈铁马演绎千秋故事",
  "固垒高碉繁衍百姓人家",
  "安顺地戏\n演的是人间英雄",
  "你，也有你的角色"
];

export default function Intro({ onComplete }: IntroProps) {
  const [step, setStep] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(bgAudio);
    audioRef.current.loop = true;
    audioRef.current.muted = isMuted;
    
    // Attempt to play immediately on mount
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.catch((e) => {
        console.log('Auto-play was prevented by the browser. Will play on first interaction.', e);
      });
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const handleClick = () => {
    if (!hasInteracted && audioRef.current) {
      audioRef.current.play().catch((e) => console.log('Audio play failed:', e));
      setHasInteracted(true);
    }

    if (step < TEXT_STEPS.length) {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 bg-black cursor-pointer select-none"
      onClick={handleClick}
    >
      <div className="absolute inset-0 pointer-events-none">
        <Prism 
          animationType="rotate" 
          timeScale={0.5} 
          height={3.5} 
          baseWidth={5.5} 
          scale={3.6} 
          hueShift={0} 
          colorFrequency={2.65} 
          noise={0} 
          glow={1} 
        /> 
      </div>

      {/* Audio Control */}
      <button 
        onClick={toggleMute}
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-white/60 hover:text-white transition-all pointer-events-auto"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
        <AnimatePresence mode="wait">
          {step < TEXT_STEPS.length ? (
            <motion.div
              key={step}
              initial={{ filter: 'blur(10px)', opacity: 0, y: 15 }}
              animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              exit={{ filter: 'blur(10px)', opacity: 0, y: -15 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-4 md:gap-6"
            >
              <h1 
                className="text-2xl tracking-widest text-white md:text-4xl whitespace-pre-line leading-relaxed"
                style={{ fontFamily: '"KaiTi", "STKaiti", serif' }}
              >
                {TEXT_STEPS[step]}
              </h1>
              <motion.div
                animate={{ x: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-white/80" />
              </motion.div>
            </motion.div>
          ) : (
            <motion.button
              key="final"
              initial={{ filter: 'blur(10px)', opacity: 0, scale: 0.9 }}
              animate={{ filter: 'blur(0px)', opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              onClick={(e) => {
                e.stopPropagation();
                onComplete();
              }}
              className="px-8 py-4 text-xl md:text-3xl tracking-[0.2em] text-white rounded-full border border-white/30 bg-white/5 hover:bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-700 pointer-events-auto"
              style={{ fontFamily: '"KaiTi", "STKaiti", serif' }}
            >
              进入地戏世界
            </motion.button>
          )}
      </AnimatePresence>
      </div>
    </motion.div>
  );
}
