import React from "react";
import { Image, ScrollView, Text } from "react-native";
import tw from "twrnc";
import { HowToWorkBrowserApi } from "../api/contextApi";
import Layout from "../components/Layout";
import NextButton from "../components/NextButton";
export default function HowToWorkBrowser() {
  const { image_url, header_text, main_text, list_text, tips } =
    HowToWorkBrowserApi;
  return (
    <ScrollView>
      <Layout>
        <Image style={tw`w-[95%] mx-auto`} source={image_url} />
        <Text style={tw`text-3xl capitalize mb-4 ml-3 font-bold text-gray-700`}>
          {header_text}
        </Text>
        <Text style={tw`text-xl mb-4 ml-3`}>{main_text}</Text>
        {list_text.map((item) => (
          <Text key={item.id} style={tw`text-lg mb-4 ml-3  text-gray-800 `}>
            {item.id}. {item.text}
          </Text>
        ))}
        <Text style={tw`text-lg mb-4 ml-3`}>
          <Text style={tw`text-pink-500 underline`}>Notice:</Text>
          {tips}
        </Text>
        <NextButton path="Tools For Build Web" />
      </Layout>
    </ScrollView>
  );
}
