import { useState } from "react";

import { Modal, Text, FormControl, Input } from "native-base";

import { Button } from "./Button";

interface NewOrderModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  onSave: (table: string) => void;
}

export function NewOrderModal({
  showModal,
  setShowModal,
  onSave,
}: NewOrderModalProps) {
  const [table, setTable] = useState("");

  function handleTableSave() {
    onSave(table);
    setShowModal(false);
    setTable("");
  }

  return (
    <Modal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      size="xl"
      avoidKeyboard
    >
      <Modal.Content bgColor="white">
        <Modal.CloseButton />
        <Modal.Header>
          <Text fontFamily="semi_bold" fontSize={18} color="gray.500">
            Informe a mesa
          </Text>
        </Modal.Header>

        <Modal.Body>
          <FormControl isRequired>
            <Input
              type="text"
              placeholder="Número da mesa"
              keyboardType="number-pad"
              onChangeText={setTable}
            />
            <FormControl.ErrorMessage>
              Digite o número da mesa.
            </FormControl.ErrorMessage>
          </FormControl>
        </Modal.Body>

        <Modal.Footer>
          <Button
            onPress={() => handleTableSave()}
            disabled={table.length === 0}
          >
            Salvar
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
