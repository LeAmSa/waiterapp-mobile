import { ActivityIndicator } from "react-native";

import { Center } from "native-base";

export function Loading() {
  return (
    <Center w="full" h="full">
      <ActivityIndicator color="#D73035" />
    </Center>
  );
}
