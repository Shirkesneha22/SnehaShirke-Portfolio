import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for typing animation effect
 * @param {string[]} roles - Array of roles to cycle through
 * @param {object} options - Configuration options
 */
const useTypingAnimation = (roles, options = {}) => {
  const {
    typingSpeed = 80,      // ms per character when typing
    deletingSpeed = 50,    // ms per character when deleting
    pauseDuration = 2000,  // pause after typing complete
    startDelay = 500,      // initial delay before starting
  } = options;

  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const currentRole = roles[roleIndex];

  const typeNextCharacter = useCallback(() => {
    if (displayText.length < currentRole.length) {
      setDisplayText(currentRole.slice(0, displayText.length + 1));
    } else {
      setIsPaused(true);
      setTimeout(() => {
        setIsPaused(false);
        setIsTyping(false);
      }, pauseDuration);
    }
  }, [displayText, currentRole, pauseDuration]);

  const deleteCharacter = useCallback(() => {
    if (displayText.length > 0) {
      setDisplayText(displayText.slice(0, -1));
    } else {
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setIsTyping(true);
    }
  }, [displayText, roles.length]);

  useEffect(() => {
    let timeout;

    if (isPaused) return;

    if (isTyping) {
      timeout = setTimeout(typeNextCharacter, typingSpeed);
    } else {
      timeout = setTimeout(deleteCharacter, deletingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isTyping,
    isPaused,
    typeNextCharacter,
    deleteCharacter,
    typingSpeed,
    deletingSpeed,
  ]);

  // Initial delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayText('');
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [startDelay]);

  return {
    displayText,
    isTyping,
    isPaused,
  };
};

export default useTypingAnimation;
