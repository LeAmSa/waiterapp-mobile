import { useState } from "react";
import { Text, FlatList, HStack, VStack } from "native-base";

import { CartItemProps } from "../@types/cartItem";
import { ProductProps } from "../@types/product";

import { Button } from "./Button";
import { CartItem } from "./CartItem";
import { Separator } from "./Separator";
import { ConfirmOrderModal } from "./ConfirmOrderModal";

import { formatCurrency } from "../utils/formatCurrency";

interface CartProps {
  cartItems: CartItemProps[];
  onAddToCart: (product: ProductProps) => void;
  onDecrementItemFromCart: (product: ProductProps) => void;
  onConfirmOrder: () => void;
}

export function Cart({
  cartItems,
  onAddToCart,
  onDecrementItemFromCart,
  onConfirmOrder,
}: CartProps) {
  const [isConfirmOrderModalVisible, setIsConfirmOrderModalVisible] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isCartEmpty = cartItems.length === 0;

  const total = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price;
  }, 0);

  function handleConfirmOrder() {
    setIsConfirmOrderModalVisible(true);
  }

  function handleOk() {
    setIsConfirmOrderModalVisible(false);
    onConfirmOrder();
  }

  return (
    <>
      {!isCartEmpty && (
        <FlatList
          maxH="150"
          data={cartItems}
          keyExtractor={(cartItem) => cartItem.product._id}
          renderItem={({ item }) => (
            <CartItem
              product={item.product}
              quantity={item.quantity}
              onAddToCart={onAddToCart}
              onDecrementItemFromCart={onDecrementItemFromCart}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}

      <HStack py="5" justifyContent="space-between" alignItems="center">
        <VStack>
          {!isCartEmpty ? (
            <>
              <Text color="gray.300">Total</Text>
              <Text color="gray.500" fontFamily="semi_bold" fontSize="20">
                {formatCurrency(total)}
              </Text>
            </>
          ) : (
            <>
              <Text color="gray.300">Seu carrinho</Text>
              <Text color="gray.300">está vazio</Text>
            </>
          )}
        </VStack>

        <Button
          maxW="200"
          disabled={isCartEmpty}
          onPress={handleConfirmOrder}
          isLoading={isLoading}
        >
          Confirmar pedido
        </Button>
      </HStack>

      <ConfirmOrderModal
        visible={isConfirmOrderModalVisible}
        onConfirm={handleOk}
      />
    </>
  );
}
