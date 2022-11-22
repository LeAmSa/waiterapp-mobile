import { ActivityIndicator } from "react-native";

import { Center } from "native-base";

export function Loading() {
  return (
    <Center>
      <ActivityIndicator color="red.default" />
    </Center>
  );
}
