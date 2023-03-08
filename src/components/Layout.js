import React from "react";
import { View } from "react-native";
import tw from "twrnc";

export default function Layout({ children }) {
  return <View style={tw`mx-6 mt-8`}>{children}</View>;
}
