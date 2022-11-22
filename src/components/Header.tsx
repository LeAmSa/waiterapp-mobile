import { VStack, HStack, Text, Button, Box } from "native-base";

interface HeaderProps {
  selectedTable: string;
  onCancelOrder: () => void;
}

export function Header({ selectedTable, onCancelOrder }: HeaderProps) {
  return (
    <VStack w="full" p={6}>
      {!selectedTable ? (
        <>
          <Text fontSize="sm" color="gray.500" opacity={60}>
            Bem vindo(a) ao
          </Text>
          <Text fontSize="lg" fontFamily="bold" color="gray.400">
            WAITER
            <Text fontFamily="regular">APP</Text>
          </Text>
        </>
      ) : (
        <>
          <HStack alignItems="center" justifyContent="space-between">
            <Text fontFamily="semi_bold" fontSize="lg" color="gray.500">
              Pedido
            </Text>
            <Button variant="unstyled" onPress={onCancelOrder}>
              <Text fontFamily="semi_bold" color="red.default">
                cancelar pedido
              </Text>
            </Button>
          </HStack>

          <Box
            p="3"
            mt="6"
            w="full"
            bgColor="white"
            borderColor="gray.200"
            borderWidth="1"
            rounded="lg"
          >
            <Text color="gray.300" fontSize="18">
              Mesa {selectedTable}
            </Text>
          </Box>
        </>
      )}
    </VStack>
  );
}
