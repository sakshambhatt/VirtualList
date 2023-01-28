import Toast from 'react-native-toast-message';

const toastSuccess = (text1: string, text2?: string) =>
  Toast.show({
    type: 'success',
    text1,
    text2,
    autoHide: true,
    visibilityTime: 3000,
  });

const toastError = (text1: string, text2?: string) =>
  Toast.show({
    type: 'error',
    text1,
    text2,
    autoHide: true,
    visibilityTime: 3000,
  });

export {toastSuccess, toastError};
