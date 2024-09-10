import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { NativeBaseProvider, Box, Text } from "native-base";
import DrizzleContext from "@/context/Drizzle";
import { createUser } from "@/services/db/user";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
            createUser("Aanish Tahir", "aanishTahir19@gmail.com");
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <NativeBaseProvider>
            <DrizzleContext>
                <Stack>
                    <Stack.Screen
                        name="(tabs)"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="+not-found" />
                    <Stack.Screen
                        name="add-account"
                        options={{
                            presentation: "modal",
                            title: "Add Account",
                        }}
                    />
                    <Stack.Screen
                        name="add-transaction"
                        options={{
                            presentation: "modal",
                            title: "Add Transaction",
                        }}
                    />
                </Stack>
            </DrizzleContext>
        </NativeBaseProvider>
    );
}
