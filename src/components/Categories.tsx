import { Text, Center, FlatList } from "native-base";
import { TouchableOpacity } from "react-native";
import { useState } from "react";

import { CategoryProps } from "../@types/category";

interface CategoriesProps {
  categories: CategoryProps[];
}

export function Categories({ categories }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState("");

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? "" : categoryId;
    setSelectedCategory(category);
  }

  return (
    <FlatList
      data={categories}
      keyExtractor={(category) => category._id}
      renderItem={({ item }) => {
        const isSelected = selectedCategory === item._id;

        return (
          <TouchableOpacity onPress={() => handleSelectCategory(item._id)}>
            <Center ml="6" pt="2" pb="2" opacity={isSelected ? "100" : "30"}>
              <Center
                bgColor="white"
                w="44"
                h="44"
                borderRadius="22"
                shadow="4"
                mb="2"
              >
                <Text>{item.icon}</Text>
              </Center>

              <Text fontSize="sm" color="gray.500" fontFamily="semi_bold">
                {item.name}
              </Text>
            </Center>
          </TouchableOpacity>
        );
      }}
      horizontal
      contentContainerStyle={{ paddingRight: 24 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
