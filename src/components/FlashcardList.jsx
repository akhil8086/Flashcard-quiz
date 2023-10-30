
import React, { useState } from 'react';
import Flashcard from './Flashcard';

  const FlashcardList = ({flashcards}) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const NextCard = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const PreviousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  if (!flashcards || flashcards.length === 0) {
    return <div></div>;
  }

  return (
    <div className='card-grid'>
      <Flashcard flashcard={flashcards[currentCardIndex]} key={flashcards[currentCardIndex].id} />
      <div className='navigation-buttons'>
        <button onClick={PreviousCard} disabled={currentCardIndex === 0}>Previous</button>
        <button onClick={NextCard} disabled={currentCardIndex === flashcards.length - 1}>Next</button>
      </div>
    </div>
  );
}

export default FlashcardList;





