import { VStack, HStack, Center } from "native-base";
import { Button } from "./Button";
import { Categories } from "./Categories";

import { Header } from "./Header";
import { Menu } from "./Menu";

export function Main() {
  return (
    <VStack flex={1} bgColor="gray.100" safeArea>
      <Header />

      <HStack h="80px">
        <Categories />
      </HStack>

      <VStack flex={1} px="6">
        <Menu />
      </VStack>

      <Center minH="110px" bgColor="white" px="6">
        <Button onPress={() => alert("Clicadassasso!")}>Novo Pedido</Button>
      </Center>
    </VStack>
  );
}
