import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";
import {
  Alert,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import icon_tab_publish from "@/assets/images/icon_tab_publish.png";
// import {
//   launchImageLibrary,
//   ImagePickerResponse,
// } from "react-native-image-picker";

export default function TabLayout() {
  const RedBookTabBar = ({ state, descriptors, navigation }: any) => {
    const { routes, index } = state;

    const onPublishPress = async () => {
      // console.log('onPublishPress method', launchImageLibrary);

      // launchImageLibrary({
      //   mediaType: "photo",
      //   quality: 1,
      //   includeBase64: true,
      // } , (response) =>{
      //   console.log("response:" + response)
      // })
    };

    return (
      <View style={styles.tabBarContainer}>
        {routes.map((route: any, i: number) => {
          const { options } = descriptors[route.key];
          const label = options.title;
          const isFocused = index === i;

          if (i === 1) {
            return (
              <TouchableOpacity
                key={label}
                style={styles.tabItem}
                onPress={onPublishPress}
              >
                <Image
                  style={styles.icon_tab_publish}
                  source={icon_tab_publish}
                />
              </TouchableOpacity>
            );
          }
          return (
            <TouchableOpacity
              key={label}
              style={styles.tabItem}
              onPress={() => {
                navigation.navigate(route.name);
              }}
            >
              <Text
                style={{
                  fontSize: isFocused ? 18 : 16,
                  color: isFocused ? "#333" : "#999",
                  fontWeight: isFocused ? "bold" : "normal",
                }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{ tabBarActiveTintColor: "orange" }}
      tabBar={(props) => <RedBookTabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        initialParams={{ name: "eren" }}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
        listeners={{
          tabPress: (e) => {
            // 阻止默认行为，如果有需要
            // e.preventDefault();

            // 这里可以添加点击事件的逻辑
            // Alert.alert('Home tab clicked!');
            console.log("Home tab clicked!");
          },
        }}
      />
      <Tabs.Screen
        name="publish"
        initialParams={{ name: "eren" }}
        options={{
          title: "publish",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="map" color={color} />
          ),
        }}
        listeners={{
          tabPress: (e) => {
            // 阻止默认行为，如果有需要
            // e.preventDefault();

            // 这里可以添加点击事件的逻辑
            // Alert.alert('Home tab clicked!');
            console.log("Home tab clicked!");
          },
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Setting",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
        listeners={{
          tabPress: (e) => {
            // 这里可以添加点击事件的逻辑
            // Alert.alert('Setting tab clicked!');
            console.log("Setting tab clicked!");
          },
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
  },
  tabBarContainer: {
    width: "100%",
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
  tabItem: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon_tab_publish: {
    width: 58,
    height: 42,
    resizeMode: "contain",
  },
});
