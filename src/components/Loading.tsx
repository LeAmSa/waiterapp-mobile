import { ActivityIndicator } from "react-native";

import { Center } from "native-base";

export function Loading() {
  return (
    <Center w="full" flex="1">
      <ActivityIndicator color="#D73035" />
    </Center>
  );
}
