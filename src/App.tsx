/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { CHARACTERS, type Character } from './constants';
import Intro from './components/Intro';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const selectedCharacter = CHARACTERS.find((c) => c.id === selectedId);

  const handleCharacterClick = (character: Character) => {
    if (selectedId === character.id) {
      setSelectedId(null);
      stopAudio();
      return;
    }

    setSelectedId(character.id);
    playAudio(character.audio);
    
    // Haptic feedback if available
    if (window.navigator.vibrate) {
      window.navigator.vibrate(50);
    }
  };

  const playAudio = (url: string) => {
    stopAudio();
    audioRef.current = new Audio(url);
    
    // Automatically close the overlay when the audio finishes playing
    audioRef.current.onended = () => {
      setSelectedId(null);
    };
    
    audioRef.current.play().catch((e) => console.log('Audio play failed:', e));
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.onended = null;
      audioRef.current = null;
    }
  };

  const handleBackgroundClick = () => {
    if (selectedId) {
      setSelectedId(null);
      stopAudio();
    }
  };

  useEffect(() => {
    return () => stopAudio();
  }, []);

  if (showIntro) {
    return <Intro onComplete={() => setShowIntro(false)} />;
  }

  return (
    <div 
      className="relative min-h-screen w-full bg-[#050505] overflow-x-hidden overflow-y-auto font-sans text-white"
      onClick={handleBackgroundClick}
    >
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rounded-full blur-[120px]"
          style={{
            background: selectedCharacter 
              ? `radial-gradient(circle, ${selectedCharacter.color}44 0%, transparent 70%)`
              : 'radial-gradient(circle, #ffffff11 0%, transparent 70%)',
            transition: 'background 0.8s ease'
          }}
        />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen py-12 px-6 pb-32 md:pb-24">
        {/* Header (Hidden when a character is selected to focus on it) */}
        <AnimatePresence>
          {!selectedId && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-12 text-center"
            >
              <h1 className="font-display text-4xl md:text-6xl tracking-tighter mb-2 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                安顺地戏
              </h1>
              <p className="text-white/40 text-sm tracking-[0.3em] uppercase mb-4">
                Anshun Dixi Opera
              </p>
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/40">
                Voice by 安顺地戏传承人周顺
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Character Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl w-full">
          {CHARACTERS.map((char) => {
            const isSelected = selectedId === char.id;
            const isDimmed = selectedId !== null && !isSelected;

            return (
              <div key={char.id} className="relative flex items-center justify-center h-32 md:h-40">
                <AnimatePresence>
                  {!isSelected && (
                    <motion.div
                      layoutId={`char-${char.id}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCharacterClick(char);
                      }}
                      initial={{ opacity: 1 }}
                      animate={{
                        opacity: isDimmed ? 0.3 : 1,
                        scale: isDimmed ? 0.8 : 1,
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      className="cursor-pointer group relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center"
                    >
                      <img
                        src={char.image}
                        alt={char.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain character-glow"
                      />
                      
                      {/* Character Name Label */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-widest text-white/40 group-hover:text-white/80 transition-colors whitespace-nowrap"
                      >
                        {char.name}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Learn More Button */}
        <AnimatePresence>
          {!selectedId && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-16 mb-8 w-full max-w-[200px] mx-auto"
            >
              <button 
                onClick={() => window.location.href = 'gallery.html'}
                className="w-full py-3 px-6 rounded-none border border-red-600 text-white hover:bg-red-600/10 transition-colors text-sm tracking-[0.2em] font-medium uppercase"
              >
                了解更多
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Selected Character Overlay */}
        <AnimatePresence>
          {selectedCharacter && (
            <motion.div 
              initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
              exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex flex-col bg-black/40 pointer-events-auto"
              onClick={handleBackgroundClick}
            >
              {/* Mask Container */}
              <div className="flex-1 flex items-center justify-center min-h-0 pt-8 md:pt-0">
                <motion.div
                  layoutId={`char-${selectedCharacter.id}`}
                  className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 pointer-events-auto cursor-pointer relative z-[60]"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedId(null);
                    stopAudio();
                  }}
                >
                  <img
                    src={selectedCharacter.image}
                    alt={selectedCharacter.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.3)]"
                  />
                </motion.div>
              </div>

              {/* Text Container */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="shrink-0 pb-12 sm:pb-16 md:pb-[10%] px-6 md:px-8 text-center z-[70] pointer-events-none"
              >
                <div className="max-w-xl mx-auto space-y-4 md:space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2"
                  >
                    <p className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                      {selectedCharacter.modernText}
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="text-sm md:text-base font-serif text-white/60 italic">
                      {selectedCharacter.traditionalText}
                    </p>
                  </motion.div>

                  {/* Waveform visualizer placeholder */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex justify-center gap-1 h-4 items-center"
                  >
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          height: [4, 12, 6, 16, 4],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.5 + Math.random() * 0.5,
                          ease: "easeInOut",
                        }}
                        className="w-1 bg-white/40 rounded-full"
                      />
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="fixed bottom-6 left-0 right-0 text-center z-10">
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/20">
            Designed by Alice 芝士兔
          </p>
        </footer>
      </main>
    </div>
  );
}

