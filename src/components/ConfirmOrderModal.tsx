import { Modal } from "react-native";
import { Center, Text, StatusBar } from "native-base";

import { CheckCircle } from "phosphor-react-native";

import { Button } from "./Button";

interface ConfirmOrderModalProps {
  visible: boolean;
  onConfirm: () => void;
}

export function ConfirmOrderModal({
  visible,
  onConfirm,
}: ConfirmOrderModalProps) {
  return (
    <Modal visible={visible} animationType="fade">
      <StatusBar backgroundColor="#D73035" barStyle="light-content" />
      <Center w="full" h="full" bgColor="red.default">
        <CheckCircle color="white" />
        <Text mt="3" color="white" fontFamily="semi_bold" fontSize="lg">
          Pedido confirmado
        </Text>
        <Text color="gray.100">O pedido já entrou na fila de preparação!</Text>
        <Button mt="4" onPress={onConfirm} isOkConfirm>
          OK
        </Button>
      </Center>
    </Modal>
  );
}
