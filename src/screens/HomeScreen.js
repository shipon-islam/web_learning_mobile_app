import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={tw`px-8 pb-6`}>
        <Image
          style={tw`w-full`}
          source={require("../../assets/images/landing.png")}
        />

        <Text
          style={tw`text-3xl text-center uppercase font-black text-gray-700`}
        >
          the best way for learning web app development
        </Text>

        <Text
          style={tw`text-[1rem] font-medium text-center  capitalize text-gray-600 mt-5`}
        >
          modern world based on technology.it means programe, science and
          communication. every where you jumped you explore how important that
          is.
        </Text>
        <Text
          onPress={() => navigation.navigate("About")}
          style={tw`text-center uppercase font-medium text-gray-700 text-sm text-slate-500 my-4 underline`}
        >
          ➜ about shipon islam
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Category")}>
          <Text
            style={tw`bg-[#B13AC8] text-center py-3 w-[80%] uppercase font-bold text-gray-200 text-lg rounded-md mx-auto`}
          >
            start learning
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
