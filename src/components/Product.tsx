import { TouchableOpacity } from "react-native";
import { HStack, VStack, Image, Text, Box } from "native-base";

import { PlusCircle } from "phosphor-react-native";

import { formatCurrency } from "../utils/formatCurrency";

import { ProductProps } from "../@types/product";

interface CustomProductProps {
  product: ProductProps;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedProduct: React.Dispatch<React.SetStateAction<ProductProps | null>>;
  onAddToCart: (product: ProductProps) => void;
}

export function Product({
  product,
  setIsModalVisible,
  setSelectedProduct,
  onAddToCart,
}: CustomProductProps) {
  function handleOpenProductDetailsModal() {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  return (
    <Box flex={1}>
      <TouchableOpacity onPress={() => handleOpenProductDetailsModal()}>
        <HStack alignItems="center">
          <Image
            // source={{ uri: `http://192.168.15.5:3333/uploads/${imagePath}` }}
            source={{ uri: "https://wallpaperaccess.com/full/317501.jpg" }}
            alt={product.name}
            size={150}
            rounded="lg"
          />

          <VStack ml="4" flex={1}>
            <Text color="gray.500" fontFamily="semi_bold">
              {product.name}
            </Text>
            <Text color="gray.300" fontSize="xs" my="1">
              {product.description}
            </Text>
            <Text fontFamily="semi_bold" color="gray.500" fontSize="xs">
              {formatCurrency(product.price)}
            </Text>
          </VStack>
        </HStack>
      </TouchableOpacity>
      <Box position="absolute" bottom="0" right="0">
        <TouchableOpacity onPress={() => onAddToCart(product)}>
          <PlusCircle color="#D73035" />
        </TouchableOpacity>
      </Box>
    </Box>
  );
}
