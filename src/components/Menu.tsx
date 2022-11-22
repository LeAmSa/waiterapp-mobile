import { FlatList } from "native-base";

import { products } from "../mocks/products";

import { Product } from "./Product";

export function Menu() {
  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product._id}
      renderItem={({ item }) => (
        <Product
          imagePath={item.imagePath}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      )}
      mt="6"
    />
  );
}
