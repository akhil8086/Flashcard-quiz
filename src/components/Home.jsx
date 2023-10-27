import React from 'react'
import { useState, useEffect } from 'react';
import FlashcardList from './FlashcardList';
import axios from 'axios';

function Home() {
    const [flashcards, setFlashcards] = useState([]);

      useEffect(() => {
        let isMounted = true;
        if (isMounted) {
          axios
            .get('https://opentdb.com/api.php?amount=10')     
            .then((res) => {
              if (isMounted) {
                setFlashcards(
                  res.data.results.map((questionItem, index) => {
                    const answer = questionItem.correct_answer;
                    return {
                      id: `${index}-${Date.now()}`,
                      question: questionItem.question,
                      answer: answer,
                    };
                  })
                );
              }
            })
            .catch((error) => {
              console.error('Error fetching data:', error);
            });
        }
        return () => {
          isMounted = false;
        };
      }, []);
      
      return (
        <div className='page-container'>
        <div className='container'>
          {
            <h1 style={{textAlign:"center"}}>Flash Quiz</h1>
          }
          <FlashcardList flashcards={flashcards} />
        </div>
      </div>
      );
    }

export default Home