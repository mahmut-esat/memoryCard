import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    flexDirection:"column",
  },
  image_container: {
    //  position: 'relative',
    margin:10
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    display: 'block',
  },
  text: {
    color: 'red',
    fontSize: 25,
  },
});
