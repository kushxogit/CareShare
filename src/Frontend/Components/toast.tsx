import Toast from "react-native-toast-message";

export function showToastSuccess(message: string) {
  const toast = Toast.show({
    type: "success",
    text1: message,
  });

  setTimeout(() => {
    Toast.hide(toast);
  }, 3000);
}

export function showToastError(message: string) {
  const toast = Toast.show({
    type: "error",
    text1: message,
  });

  setTimeout(() => {
    Toast.hide(toast);
  }, 3000);
}
