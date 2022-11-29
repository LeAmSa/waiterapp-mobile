import { useState } from "react";
import { Text, FlatList, HStack, VStack } from "native-base";

import { CartItemProps } from "../@types/cartItem";
import { ProductProps } from "../@types/product";

import { Button } from "./Button";
import { CartItem } from "./CartItem";
import { Separator } from "./Separator";
import { ConfirmOrderModal } from "./ConfirmOrderModal";

import { formatCurrency } from "../utils/formatCurrency";
import { api } from "../utils/api";

interface CartProps {
  cartItems: CartItemProps[];
  selectedTable: string;
  onAddToCart: (product: ProductProps) => void;
  onDecrementItemFromCart: (product: ProductProps) => void;
  onConfirmOrder: () => void;
}

export function Cart({
  cartItems,
  selectedTable,
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

  async function handleConfirmOrder() {
    try {
      setIsLoading(true);
      const payload = {
        table: selectedTable,
        products: cartItems.map((cartItem) => ({
          product: cartItem.product._id,
          quantity: cartItem.quantity,
        })),
      };
      await api.post("/orders", payload);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setIsConfirmOrderModalVisible(true);
    }
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
