import React, {useEffect, useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import MyButton from './src/components/Button/Button';
import SimpleCard from './src/components/SimpleCard/SimpleCard';

const cardImages = [
  {src: require('./src/assets/1.png'), matched: false},
  {src: require('./src/assets/2.png'), matched: false},
  {src: require('./src/assets/3.png'), matched: false},
  {src: require('./src/assets/4.png'), matched: false},
  {src: require('./src/assets/5.png'), matched: false},
  {src: require('./src/assets/6.png'), matched: false},
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // shuffle cards

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({...card, id: Math.random()}));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // start automatically

  useEffect(() => {
    shuffleCards();
  }, []);
  // handle a choice

  const handleChoice = card => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true};
            } else {
              return card;
            }
          });
        });

        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 300);
      }
    }
  }, [choiceOne, choiceTwo]);

  // reset choices & increase turn

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eşleştirme Oyunu</Text>
      <MyButton  onPress={shuffleCards}/>
      <View style={styles.inner_container}>
        {cards.map(card => (
          <SimpleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </View>
      <View style={styles.turn_container}>
        <Text style={styles.turn_text}>Sayaç:  {turns}</Text>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
    alignItems: 'center',
  },
  title: {
    marginVertical: 24,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'steelblue',
  },
  inner_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:15
  },
  turn_container: {
    marginTop: 5,
    backgroundColor: 'steelblue',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
  },
  turn_text: {
    fontSize: 32,
    color: 'white',
    fontWeight: '700',
  },
});