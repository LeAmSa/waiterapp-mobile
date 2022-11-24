import { Text, FlatList, HStack, VStack } from "native-base";

import { CartItemProps } from "../@types/cartItem";

import { Button } from "./Button";
import { CartItem } from "./CartItem";
import { Separator } from "./Separator";

import { formatCurrency } from "../utils/formatCurrency";
import { ProductProps } from "../@types/product";

interface CartProps {
  cartItems: CartItemProps[];
  onAddToCart: (product: ProductProps) => void;
  onDecrementItemFromCart: (product: ProductProps) => void;
}

export function Cart({
  cartItems,
  onAddToCart,
  onDecrementItemFromCart,
}: CartProps) {
  const isCartEmpty = cartItems.length === 0;

  const total = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price;
  }, 0);

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

        <Button maxW="200" disabled={isCartEmpty}>
          Confirmar pedido
        </Button>
      </HStack>
    </>
  );
}
