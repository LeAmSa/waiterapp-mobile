import { Modal } from "native-base";

import { ProductProps } from "../@types/product";

interface ProductDetailsModalProps {
  product: ProductProps | null;
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ProductDetailsModal({
  product,
  isModalVisible,
  setIsModalVisible,
}: ProductDetailsModalProps) {
  return (
    <Modal
      size="full"
      isOpen={isModalVisible}
      onClose={() => setIsModalVisible(false)}
      animationPreset="slide"
    >
      <Modal.Content bgColor="white">
        <Modal.CloseButton />
        <Modal.Header></Modal.Header>

        <Modal.Body>{product?.name}</Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
