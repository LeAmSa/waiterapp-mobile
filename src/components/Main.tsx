import { useState, useEffect } from "react";
import { VStack, HStack, Center, Box } from "native-base";

import axios from "axios";

import { API_BASE_URL } from "@env";

import { Button } from "./Button";
import { Categories } from "./Categories";
import { Header } from "./Header";
import { Menu } from "./Menu";
import { NewOrderModal } from "./NewOrderModal";
import { Cart } from "./Cart";
import { Loading } from "./Loading";
import { Empty } from "./Empty";

import { CartItemProps } from "../@types/cartItem";
import { ProductProps } from "../@types/product";
import { CategoryProps } from "../@types/category";

export function Main() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTable, setSelectedTable] = useState("");
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  function handleSaveTable(table: string) {
    setSelectedTable(table);
  }

  function handleResetOrder() {
    setSelectedTable("");
    setCartItems([]);
  }

  function handleAddToCart(product: ProductProps) {
    if (!selectedTable) {
      setShowModal(true);
    }

    setCartItems((prev) => {
      //get index of added product in cart list
      const itemIndex = prev.findIndex(
        (cartItem) => cartItem.product._id === product._id
      );

      //itemIndex < 0 means added product is not in cart list
      if (itemIndex < 0) {
        return [...prev, { quantity: 1, product }];
      }

      const newCartItems = [...prev];
      const item = newCartItems[itemIndex];

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1,
      };

      return newCartItems;
    });
  }

  function handleDecrementItemFromCart(product: ProductProps) {
    setCartItems((prev) => {
      //get index of added product in cart list
      const itemIndex = prev.findIndex(
        (cartItem) => cartItem.product._id === product._id
      );

      const item = prev[itemIndex];
      const newCartItems = [...prev];

      //if product quantity === 1, then remove from cart list
      if (item.quantity === 1) {
        newCartItems.splice(itemIndex, 1);

        return newCartItems;
      }

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      };

      return newCartItems;
    });
  }

  useEffect(() => {
    Promise.all([
      axios.get(`${API_BASE_URL}/categories`),
      axios.get(`${API_BASE_URL}/products`),
    ]).then(([categoriesResponse, productsResponse]) => {
      setCategories(categoriesResponse.data);
      setProducts(productsResponse.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <VStack flex={1} bgColor="gray.100" safeArea>
      {!isLoading ? (
        <>
          <Header
            selectedTable={selectedTable}
            onCancelOrder={handleResetOrder}
          />
          <HStack h="80px">
            <Categories categories={categories} />
          </HStack>

          {products.length > 0 ? (
            <VStack flex={1} px="6">
              <Menu products={products} onAddToCart={handleAddToCart} />
            </VStack>
          ) : (
            <Empty />
          )}
        </>
      ) : (
        <Loading />
      )}

      {!selectedTable ? (
        <Center minH="110px" bgColor="white" px="6">
          <Button onPress={() => setShowModal(true)}>Novo Pedido</Button>
        </Center>
      ) : (
        <Box bgColor="white" minH="110px" px="6">
          <Cart
            cartItems={cartItems}
            onAddToCart={handleAddToCart}
            onDecrementItemFromCart={handleDecrementItemFromCart}
            onConfirmOrder={handleResetOrder}
          />
        </Box>
      )}

      <NewOrderModal
        showModal={showModal}
        setShowModal={setShowModal}
        onSave={handleSaveTable}
      />
    </VStack>
  );
}
