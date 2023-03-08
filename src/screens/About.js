import { Image, ScrollView, Text, View } from "react-native";
import tw from "twrnc";
import { AboutApi } from "../api/contextApi";

export default function About({ navigation }) {
  const { image_url, header_text, author, list_text } = AboutApi;
  return (
    <ScrollView>
      <View style={tw`px-8 pb-6`}>
        <View>
          <Image
            style={tw`w-[100px] h-[100px] rounded-full border-2 border-purple-500 mx-auto mt-4`}
            source={image_url}
          />

          <Text
            style={tw`text-[1.8rem] capitalize font-medium text-gray-700 text-center mt-2`}
          >
            {author}
          </Text>
          <Text
            style={tw`text-lg font-medium text-center text-purple-600 mb-2`}
          >
            ({header_text})
          </Text>
        </View>
        {list_text.map((item) => (
          <Text
            key={item.id}
            style={tw`text-center text-gray-700 text-[1.2rem] mx-auto mb-4 `}
          >
            {item.text}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}
