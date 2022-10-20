import { useRef } from "react";
import { Alert, AlertButton } from "react-native";

type TOptions =
  | {
      title?: string;
      message?: string;
      buttons?: AlertButton[];
    }
  | Object;

export const useAlert = (config?: TOptions) => {
  const compliedConfig = {
    title: "Alert Title",
    message: "My Alert Msg",
    buttons: [
      {
        text: "OK",
        onPress: () => {
          console.log("button Pressed");
        },
        style: "cancel",
      },
    ] as AlertButton[],
    ...config,
  };

  return (updatedConfig: any = {}) => {
    const _updatedConfig = {
      ...compliedConfig,
      ...updatedConfig,
    };
    return Alert.alert(
      _updatedConfig.title,
      _updatedConfig.message,
      _updatedConfig.buttons
    );
  };
};
