import { ImageBackground } from "react-native";

import { Modal, Text, VStack, HStack } from "native-base";

import { ProductProps } from "../@types/product";

import { Ingredient } from "./Ingredient";
import { Button } from "./Button";
import { formatCurrency } from "../utils/formatCurrency";

interface ProductDetailsModalProps {
  product: ProductProps | null;
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onAddToCart: (product: ProductProps) => void;
}

export function ProductDetailsModal({
  product,
  isModalVisible,
  setIsModalVisible,
  onAddToCart,
}: ProductDetailsModalProps) {
  if (!product) {
    return null;
  }

  function handleAddToCart(product: ProductProps) {
    onAddToCart(product);
    setIsModalVisible(false);
  }

  return (
    <Modal
      size="full"
      isOpen={isModalVisible}
      onClose={() => setIsModalVisible(false)}
      animationPreset="slide"
    >
      <Modal.Content bgColor="white">
        <Modal.CloseButton
          bgColor="black.opacity"
          borderRadius="full"
          _icon={{ color: "white" }}
        />
        <Modal.Header p="0">
          <ImageBackground
            source={{ uri: "https://wallpaperaccess.com/full/317501.jpg" }}
            style={{ width: "100%", height: 200 }}
          />
        </Modal.Header>

        <Modal.Body bgColor="gray.100">
          <Text fontFamily="semi_bold" fontSize="lg" color="gray.500">
            {product.name}
          </Text>
          <Text color="gray.400" mt="2">
            {product.description}
          </Text>

          {product.ingredients?.length > 0 && (
            <VStack mt="8">
              <Text mb="4" fontFamily="semi_bold" color="gray.400">
                Ingredientes
              </Text>

              <VStack>
                {product.ingredients?.map((ingredient) => (
                  <Ingredient
                    key={ingredient._id}
                    icon={ingredient.icon}
                    name={ingredient.name}
                  />
                ))}
              </VStack>
            </VStack>
          )}
        </Modal.Body>

        <Modal.Footer>
          <HStack w="full" alignItems="center" justifyContent="space-between">
            <VStack>
              <Text color="gray.400">Preço</Text>
              <Text fontFamily="semi_bold" fontSize="20" color="gray.500">
                {formatCurrency(product.price)}
              </Text>
            </VStack>
            <Button maxW="200" onPress={() => handleAddToCart(product)}>
              Adicionar ao pedido
            </Button>
          </HStack>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
