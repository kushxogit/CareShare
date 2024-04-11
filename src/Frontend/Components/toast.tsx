import Toast from "react-native-toast-message";

export function showToastSuccess(message: string) {
  Toast.show({
    type: "success",
    text1: message,
  });
}

export function showToastError(message: string) {
  console.log("asdsad", message);
  Toast.show({
    type: "error",
    text1: message,
  });
}
