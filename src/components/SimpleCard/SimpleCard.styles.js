import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 5,
    justifyContent:"center",
    alignItems:"center",
    flexDirection: 'row', flexWrap: 'wrap'
  },
  image_container: {
    flexDirection: 'column',
    position: 'relative',
    marginTop:10
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    color: 'red',
    fontSize: 25,
  },
});
