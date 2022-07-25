import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  matrix: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  top: {
    flex: 1,
    padding: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
