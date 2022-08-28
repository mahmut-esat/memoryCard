import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './Card.styles'

function Card({card, handleChoice}) {
  const handlePress = () => {
    handleChoice(items);
  };

  return (
    <View style={styles.container}>
      <View style={styles.image_container}>

        <TouchableOpacity onPress={() => handlePress}>
          <Image style={styles.image} source={card.src} />
          <Image
            style={styles.image}
            source={require('../../assets/cover.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Card;









// <View key={card.id}>
//   <View style={{flexDirection: 'column', margin: 10}}>
//     <TouchableOpacity>
//       <Image source={card.src} style={{width: 100, height: 100}} />
//     </TouchableOpacity>
//     <TouchableOpacity onPress={handleChoice}>
//       <Image
//         source={require('./src/assets/cover.png')}
//         style={{width: 100, height: 100}}
//       />
//     </TouchableOpacity>
//  </View>
// </View>
