import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from '../../helpers/ScreenHelpers';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    marginTop: '10%',
  },
  input: {
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 10,
    marginTop: 12,
  },
  datePicker: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
  datePickerButton: {
    width: SCREEN_WIDTH,
    backgroundColor: '#E3E3E4',
    padding: 10,
    justifyContent: 'flex-end',
  },
  button: {
    padding: 10,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: '20%',
  },
  autocompleteContainer: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 1,
  },
});

export default styles;
