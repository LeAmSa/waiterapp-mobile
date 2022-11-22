import { VStack, Text } from "native-base";

export function Header() {
  return (
    <VStack w="full" m={6}>
      <Text fontSize="sm" color="gray.500" opacity={60}>
        Bem vindo(a) ao
      </Text>
      <Text fontSize="lg" fontFamily="bold" color="gray.400">
        WAITER
        <Text fontFamily="regular">APP</Text>
      </Text>
    </VStack>
  );
}
