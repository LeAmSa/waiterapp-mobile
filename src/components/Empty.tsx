import { Text, Center, Image } from "native-base";

import emptyImg from "../img/empty.png";

export function Empty() {
  return (
    <Center w="full" flex="1">
      <Image source={emptyImg} alt="Não há produtos" w="200" h="107" />
      <Text mt="6" color="gray.300">
        Nenhum produto foi encontrado!
      </Text>
    </Center>
  );
}
