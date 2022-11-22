import { HStack, VStack, Image, Text } from "native-base";

import { formatCurrency } from "../utils/formatCurrency";

interface ProductProps {
  imagePath: string;
  name: string;
  description: string;
  price: number;
}

export function Product({ imagePath, name, description, price }: ProductProps) {
  return (
    <HStack alignItems="center">
      <Image
        // source={{ uri: `http://192.168.15.5:3333/uploads/${imagePath}` }}
        alt={name}
        w="40"
        rounded="lg"
      />

      <VStack ml="4" flex={1}>
        <Text color="gray.500" fontFamily="semi_bold">
          {name}
        </Text>
        <Text color="gray.300" fontSize="xs" my="1">
          {description}
        </Text>
        <Text fontFamily="semi_bold" color="gray.500" fontSize="xs">
          {formatCurrency(price)}
        </Text>
      </VStack>
    </HStack>
  );
}
