import { Stack } from "expo-router";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { Poppins_300Light } from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

function RootLayout() {
  let [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
    Poppins: Poppins_300Light,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "skyblue" },
          headerTitleAlign: "center",
          headerShadowVisible: true,
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
      </Stack>
    </GestureHandlerRootView>
  );
}

export default RootLayout;
