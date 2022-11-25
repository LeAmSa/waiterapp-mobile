import { useState } from "react";

import { FlatList } from "native-base";

import { Product } from "./Product";
import { ProductDetailsModal } from "./ProductDetailsModal";
import { Separator } from "./Separator";
import { ProductProps } from "../@types/product";

interface MenuProps {
  products: ProductProps[];
  onAddToCart: (product: ProductProps) => void;
}

export function Menu({ products, onAddToCart }: MenuProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(
    null
  );

  function handleOpenModal(product: ProductProps) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  return (
    <>
      <FlatList
        data={products}
        keyExtractor={(product) => product._id}
        renderItem={({ item }) => (
          <Product
            product={item}
            setIsModalVisible={setIsModalVisible}
            setSelectedProduct={setSelectedProduct}
            onAddToCart={onAddToCart}
          />
        )}
        mt="6"
        ItemSeparatorComponent={Separator}
        contentContainerStyle={{
          paddingBottom: 24,
        }}
        showsVerticalScrollIndicator={false}
      />

      <ProductDetailsModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />
    </>
  );
}
