import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

interface IntroProps {
  onComplete: () => void;
}

export default function Intro({ onComplete }: IntroProps) {
  const [step, setStep] = useState(0);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  
  const fullText1 = '安顺地戏，一触入戏';
  const fullText2 = '让情绪，有角色可入';

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (step === 0) {
      // Typewriter for first sentence
      if (text1.length < fullText1.length) {
        timeout = setTimeout(() => {
          setText1(fullText1.slice(0, text1.length + 1));
        }, 90);
      } else {
        timeout = setTimeout(() => setStep(1), 800);
      }
    } else if (step === 1) {
      // Typewriter for second sentence
      if (text2.length < fullText2.length) {
        timeout = setTimeout(() => {
          setText2(fullText2.slice(0, text2.length + 1));
        }, 90);
      } else {
        timeout = setTimeout(() => setStep(2), 1500);
      }
    } else if (step === 2) {
      // Fade out
      onComplete();
    }

    return () => clearTimeout(timeout);
  }, [step, text1, text2, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black p-6 text-center"
    >
      <div className="space-y-4">
        <h1 
          className="text-2xl tracking-widest text-white md:text-4xl"
          style={{ fontFamily: '"KaiTi", "STKaiti", serif' }}
        >
          {text1}
          {step === 0 && <span className="cursor-blink" />}
        </h1>
        <AnimatePresence>
          {step >= 1 && (
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl tracking-widest text-white/80 md:text-2xl"
              style={{ fontFamily: '"KaiTi", "STKaiti", serif' }}
            >
              {text2}
              {step === 1 && <span className="cursor-blink" />}
            </motion.h2>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
