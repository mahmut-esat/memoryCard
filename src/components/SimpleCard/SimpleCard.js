import React from 'react';
import {View, TouchableOpacity, Image, Text, ScrollView} from 'react-native';
import styles from './SimpleCard.styles';

export default function SimpleCard({card, handleChoice, flipped, disabled}) {
  const handlePress = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        {flipped ? (
          <TouchableOpacity>
            <Image style={styles.image} source={card.src} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handlePress}>
            <Image
              style={styles.image}
              source={require('../../assets/cover.png')}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
1;
