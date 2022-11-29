import { HStack, VStack, Image, Text } from "native-base";
import { TouchableOpacity } from "react-native";

import { CartItemProps } from "../@types/cartItem";

import { PlusCircle, MinusCircle } from "phosphor-react-native";
import { formatCurrency } from "../utils/formatCurrency";
import { ProductProps } from "../@types/product";
import { API_BASE_URL } from "@env";

interface ThisCartItemProps extends CartItemProps {
  onAddToCart: (product: ProductProps) => void;
  onDecrementItemFromCart: (product: ProductProps) => void;
}

export function CartItem({
  product,
  quantity,
  onAddToCart,
  onDecrementItemFromCart,
}: ThisCartItemProps) {
  return (
    <HStack w="full" py="2" justifyContent="space-between" alignItems="center">
      <HStack space="3">
        <Image
          source={{ uri: `${API_BASE_URL}/uploads/${product.imagePath}` }}
          alt={product.name}
          w="12"
          h="12"
          rounded="md"
        />

        <Text fontSize="sm" color="gray.300">
          {quantity}x
        </Text>

        <VStack space="1">
          <Text fontFamily="semi_bold" fontSize="sm" color="gray.500">
            {product.name}
          </Text>
          <Text fontSize="sm" color="gray.300">
            {formatCurrency(product.price)}
          </Text>
        </VStack>
      </HStack>

      <HStack space="4">
        <TouchableOpacity onPress={() => onAddToCart(product)}>
          <PlusCircle color="#D73035" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDecrementItemFromCart(product)}>
          <MinusCircle color="#D73035" />
        </TouchableOpacity>
      </HStack>
    </HStack>
  );
}
