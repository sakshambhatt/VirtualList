import {StyleSheet} from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {color: 'black'},
  button: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: 'slate',
    color: 'white',
  },
  messageContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  loadingText: {color: 'green'},
  errorText: {color: 'red'},
});
