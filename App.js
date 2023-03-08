import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import About from "./src/screens/About";
import BackendDevelopment from "./src/screens/BackendDevelopment";
import CategoryScreen from "./src/screens/CategoryScreen";
import DatabaseManagement from "./src/screens/DatabaseManagent";
import FrontendDevelopment from "./src/screens/FrontendDevelopment";
import HomeScreen from "./src/screens/HomeScreen";
import HowToWorkBrowser from "./src/screens/HowToWorkBrowserScreen";
import HowToWorkWebsite from "./src/screens/HowToWorkWebsiteScreen.js";
import Introduction from "./src/screens/Introduction";
import LanguagesForWeb from "./src/screens/LanguagesForWeb";
import UiUxDesignScreen from "./src/screens/UiUxDesignScreen";
import WebsiteToolsScreen from "./src/screens/WebsiteToolsScreen";
import WhatIsBrowserScreen from "./src/screens/WhatIsBrowserScreen";
import WhatIsWebSite from "./src/screens/WhatIsWebSite";

const Stack = createNativeStackNavigator();

function App() {
  const headerColor = {
    headerStyle: {
      backgroundColor: "#B13AC8",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={headerColor}
        />
        <Stack.Screen
          name="Category"
          component={CategoryScreen}
          options={headerColor}
        />
        <Stack.Screen
          name="Introduction"
          component={Introduction}
          options={headerColor}
        />
        <Stack.Screen
          name="How To Work Website"
          component={HowToWorkWebsite}
          options={headerColor}
        />
        <Stack.Screen
          name="What Is Website"
          component={WhatIsWebSite}
          options={headerColor}
        />
        <Stack.Screen
          name="What Is Browser"
          component={WhatIsBrowserScreen}
          options={headerColor}
        />
        <Stack.Screen
          name="How To Work Browser"
          component={HowToWorkBrowser}
          options={headerColor}
        />
        <Stack.Screen
          name="Tools For Build Web"
          component={WebsiteToolsScreen}
          options={headerColor}
        />
        <Stack.Screen
          name="Ui/Ux Design"
          component={UiUxDesignScreen}
          options={headerColor}
        />
        <Stack.Screen
          name="Languages For Web"
          component={LanguagesForWeb}
          options={headerColor}
        />
        <Stack.Screen
          name="Frontend Development"
          component={FrontendDevelopment}
          options={headerColor}
        />
        <Stack.Screen
          name="Backend Development"
          component={BackendDevelopment}
          options={headerColor}
        />
        <Stack.Screen
          name="Database Management"
          component={DatabaseManagement}
          options={headerColor}
        />
        <Stack.Screen name="About" component={About} options={headerColor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
