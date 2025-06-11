// src/components/TypingGreeting.jsx
import { useEffect, useState } from 'react';
import "./Header.scss";


export default function TypingGreeting() {
  /* ✏️  your phrases here  */
  const messages = [
    "Hello World!",        // English
    "!سلام دنیا",          // Persian (Farsi)
    "Hallo Welt!",         // German (Deutsch)
    "¡Hola Mundo!",        // Spanish
    "Bonjour le monde !",  // French
    "Namaste Dunya!",       // Hindi (commonly referred to as “Indian”)
    "你好，世界！"            // Chinese (Simplified)
  ];
  

  /* local typing state */
  const [msgIndex, setMsgIndex] = useState(0);  // which phrase
  const [charIndex, setCharIndex] = useState(0); // which letter
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = messages[msgIndex];
    const speed = isDeleting ? 50 : 120;        // typing vs deleting

    const id = setTimeout(() => {
      if (!isDeleting) {
        // typing forward
        if (charIndex < current.length) {
          setCharIndex(charIndex + 1);
        } else {
          // pause, then start deleting
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        // deleting backward
        if (charIndex > 0) {
          setCharIndex(charIndex - 1);
        } else {
          // next word
          setIsDeleting(false);
          setMsgIndex((msgIndex + 1) % messages.length);
        }
      }
    }, speed);

    return () => clearTimeout(id);
  }, [charIndex, isDeleting, msgIndex, messages]);

  return (
    <span className="font-semibold inline-block !text-2xl md:!text-4xl head-text">
      {messages[msgIndex].slice(0, charIndex)}
      <span className="border-r-2 border-current animate-caret ml-0.5" />
    </span>
  );
}
