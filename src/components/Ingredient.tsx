import { HStack, Text } from "native-base";

interface IngredientProps {
  icon: string;
  name: string;
}

export function Ingredient({ icon, name }: IngredientProps) {
  return (
    <HStack
      mb="2"
      space="5"
      p="4"
      rounded="md"
      borderColor="gray.200"
      borderWidth="1"
    >
      <Text>{icon}</Text>
      <Text color="gray.400" fontSize="sm">
        {name}
      </Text>
    </HStack>
  );
}
