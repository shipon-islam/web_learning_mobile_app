import React from "react";
import { Image, ScrollView, Text } from "react-native";
import tw from "twrnc";
import { BackendDevApi } from "../api/contextApi";
import Layout from "../components/Layout";
import NextButton from "../components/NextButton";
export default function BackendDevelopment() {
  const {
    image_url,
    header_text,
    main_text,
    main_text2,
    main_text3,
    list_text,
    tips,
  } = BackendDevApi;
  return (
    <ScrollView>
      <Layout>
        <Image style={tw`w-[95%] mx-auto`} source={image_url} />
        <Text style={tw`text-3xl capitalize mb-4 ml-3 font-bold text-gray-700`}>
          {header_text}
        </Text>
        <Text style={tw`text-lg mb-4 ml-3`}>{main_text}</Text>
        <Text style={tw`text-lg mb-4 ml-3`}>{main_text2}</Text>
        <Text style={tw`text-lg mb-4 ml-3`}>{main_text3}</Text>
        {list_text.map((item) => (
          <Text key={item.id} style={tw`text-lg mb-4 ml-3  text-gray-800 `}>
            ▪️ {item.text}
          </Text>
        ))}
        <Text style={tw`text-lg mb-4 ml-3 font-medium`}>{tips}</Text>
        <NextButton path="Database Management" />
      </Layout>
    </ScrollView>
  );
}
