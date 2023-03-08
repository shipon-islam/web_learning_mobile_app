import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

export default function NextButton({ path }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(path)}>
      <Text
        style={tw`bg-[#B13AC8] text-center py-2 px-8 uppercase font-medium text-gray-200 text-[1.1rem] rounded-md ml-auto mb-4 mr-4 mt-4`}
      >
        next
      </Text>
    </TouchableOpacity>
  );
}
