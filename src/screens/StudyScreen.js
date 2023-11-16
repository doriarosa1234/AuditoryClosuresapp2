import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const StudyScreen = () => {
  const flashcards = [
    {
      question: 'You sleep on a ____.',
      answer: 'bed',
    },
    {
      question: 'Fish swim in ____',
      answer: 'water',
    },
    {
      question: 'Tie your ____.',
      answer: 'shoes',
    },
    {
      question: 'Birds build ____',
      answer: 'nest',
    },
    // Add more flashcards as needed
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isShowingAnswer, setIsShowingAnswer] = useState(false);

  const handleNextCard = () => {
    setIsShowingAnswer(false);
    setCurrentCardIndex((prevIndex) => prevIndex + 1);
  };

  const handleFlipCard = () => {
    setIsShowingAnswer((prevState) => !prevState);
  };

  if (currentCardIndex >= flashcards.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>You have completed all the flashcards!</Text>
      </View>
    );
  }

  const currentCard = flashcards[currentCardIndex];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cardContainer} onPress={handleFlipCard}>
        <Text style={styles.cardText}>
          {isShowingAnswer ? currentCard.answer : currentCard.question}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleNextCard}>
        <Text style={styles.buttonText}>Next Card</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'purple',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 4,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  cardText: {
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default StudyScreen;
