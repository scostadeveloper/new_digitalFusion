import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypingAnimationProps {
  text: string | string[];
  className?: string;
  duration?: number;
  cursor?: boolean;
  cursorChar?: string;
  delay?: number;
  infinite?: boolean;
  onComplete?: () => void;
}

export function TypingAnimation({
  text,
  className = '',
  duration = 50,
  cursor = true,
  cursorChar = '|',
  delay = 0,
  infinite = false,
  onComplete,
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textArrayIndex, setTextArrayIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const textArray = Array.isArray(text) ? text : [text];
  const currentText = textArray[textArrayIndex];

  useEffect(() => {
    const startDelay = setTimeout(() => {
      const timeout = setTimeout(
        () => {
          if (!isDeleting) {
            // Typing
            if (currentIndex < currentText.length) {
              setDisplayText(currentText.slice(0, currentIndex + 1));
              setCurrentIndex(currentIndex + 1);
            } else {
              // Finished typing current text
              if (textArray.length > 1) {
                // Multiple texts - start deleting after pause
                setTimeout(() => setIsDeleting(true), 1500);
              } else {
                // Single text - call onComplete
                onComplete?.();
              }
            }
          } else {
            // Deleting
            if (currentIndex > 0) {
              setDisplayText(currentText.slice(0, currentIndex - 1));
              setCurrentIndex(currentIndex - 1);
            } else {
              // Finished deleting
              setIsDeleting(false);
              setTextArrayIndex((textArrayIndex + 1) % textArray.length);
              setCurrentIndex(0);

              if (!infinite && textArrayIndex === textArray.length - 1) {
                onComplete?.();
              }
            }
          }
        },
        isDeleting ? duration / 2 : duration
      );

      return () => clearTimeout(timeout);
    }, delay);

    return () => clearTimeout(startDelay);
  }, [
    currentIndex,
    isDeleting,
    textArrayIndex,
    currentText,
    duration,
    delay,
    infinite,
    onComplete,
    textArray,
  ]);

  // Cursor blinking effect
  useEffect(() => {
    if (cursor) {
      const interval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 530);
      return () => clearInterval(interval);
    }
  }, [cursor]);

  return (
    <span className={cn('inline-block', className)}>
      {displayText}
      {cursor && (
        <span
          className={cn(
            'inline-block text-neon-cyan animate-pulse ml-1',
            showCursor ? 'opacity-100' : 'opacity-0'
          )}
        >
          {cursorChar}
        </span>
      )}
    </span>
  );
}

// Preset variants
export function HeroTyping({
  text,
  className = '',
}: {
  text: string | string[];
  className?: string;
}) {
  return (
    <TypingAnimation
      text={text}
      className={cn(
        'text-4xl md:text-6xl font-bold text-gradient-neon',
        className
      )}
      duration={80}
      infinite={Array.isArray(text)}
    />
  );
}

export function SubtitleTyping({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  return (
    <TypingAnimation
      text={text}
      className={cn('text-lg md:text-xl text-gray-300', className)}
      duration={40}
      delay={1000}
      cursor={false}
    />
  );
}

export function CodeTyping({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  return (
    <TypingAnimation
      text={text}
      className={cn('font-mono text-neon-green', className)}
      duration={60}
      cursorChar="_"
    />
  );
}

export default TypingAnimation;
