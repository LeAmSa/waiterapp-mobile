import { useState } from "react";

import { VStack, HStack, Center } from "native-base";
import { Button } from "./Button";
import { Categories } from "./Categories";

import { Header } from "./Header";
import { Menu } from "./Menu";
import { NewOrderModal } from "./NewOrderModal";

export function Main() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTable, setSelectedTable] = useState("");

  function handleSaveTable(table: string) {
    setSelectedTable(table);
  }

  function handleCancelOrder() {
    setSelectedTable("");
  }

  return (
    <VStack flex={1} bgColor="gray.100" safeArea>
      <Header selectedTable={selectedTable} onCancelOrder={handleCancelOrder} />

      <HStack h="80px">
        <Categories />
      </HStack>

      <VStack flex={1} px="6">
        <Menu />
      </VStack>

      {!selectedTable && (
        <Center minH="110px" bgColor="white" px="6">
          <Button onPress={() => setShowModal(true)}>Novo Pedido</Button>
        </Center>
      )}

      <NewOrderModal
        showModal={showModal}
        setShowModal={setShowModal}
        onSave={handleSaveTable}
      />
    </VStack>
  );
}
