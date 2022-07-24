import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const calculatorWidth = windowWidth > 350 ? 350 : windowWidth;

const styles = StyleSheet.create({
  calculator: {
    flex: 1,
    maxWidth: calculatorWidth,
    minHeight: calculatorWidth * 1.5,
  },
  display: {
    flex: 1,
    padding: 25,
    minHeight: 75,
  },
  displayInner: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  buttons: {
    flex: 3,
    padding: 25,
    minHeight: 350,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  buttonsLeft: {
    flex: 3,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttonsTop: {
    flex: 5,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsBottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsRight: {
    flex: 1,
  },
  btnSingle: {flex: 2, flexBasis: 2},
  btnDouble: {
    flex: 4,
    flexBasis: 2,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDouble: {height: 120, borderRadius: 10, lineHeight: 120},
  textDoubleHorizontal: {width: 120, borderRadius: 10},
  displayText: {fontSize: 30, fontWeight: 'bold'},
});

export default styles;
