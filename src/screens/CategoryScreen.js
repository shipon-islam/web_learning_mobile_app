import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { FlatList, Text } from "react-native";
import tw from "twrnc";
import { categoryList } from "../api/categoryApi";
import Layout from "../components/Layout";

export default function CategoryScreen({ navigation }) {
  return (
    <Layout>
      <FlatList
        data={categoryList}
        renderItem={({ item, index }) => (
          <Text
            onPress={() => navigation.navigate(item.path)}
            style={tw`bg-[#B13AC8] py-3 pl-4 w-full uppercase font-bold text-gray-200 text-lg rounded-md mt-4 ${
              item.id === categoryList.length ? "mb-6" : "mb-0"
            }`}
          >
            <AntDesign
              style={tw`text-purple-300`}
              name="checksquare"
              size={24}
            />
            <Text> {item.title}</Text>
          </Text>
        )}
      />
    </Layout>
  );
}
