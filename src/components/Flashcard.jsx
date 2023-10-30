
import React, { useState } from 'react';


  const Flashcard = ({flashcard}) => {
  const [flip, setFlip] = useState(false);

  const handleCardClick = () => {
    setFlip(!flip);
  };

  return (
    <div className={`card ${flip ? 'flip' : ''}`} onClick={handleCardClick}>
      <div className="card-inner">
        <div className="card-face front">
          {flashcard.question}
        </div>
        <div className="card-face back">
          {flashcard.answer}
        </div>
      </div>
    </div>
  );
}

export default Flashcard;

