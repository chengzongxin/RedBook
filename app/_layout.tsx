// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen name="index" />
//     </Stack>
//   );
// }

import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaProvider style={{ width: "100%", height: "100%" }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <Stack
        screenOptions={{ headerShown: false }}
        // screenOptions={{
        //   headerStyle: {
        //     backgroundColor: '#f4511e',
        //   },
        //   headerTintColor: '#fff',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   },
        // }}
      >
        {/* Optionally configure static options outside the route.*/}
        <Stack.Screen name="index" options={{}} />
      </Stack>
    </SafeAreaProvider>
  );
}
