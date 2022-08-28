import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './Button.styles'

const Button = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>Yeni Oyun</Text>
    </TouchableOpacity>
  );
};

export default Button;
