import { router } from "expo-router";
import { Text, View, StyleSheet, Image } from "react-native";
import icon_main_logo from "@/assets/images/icon_main_logo.png";
import { useEffect } from "react";


export default function Index() {

  useEffect(()=>{
    setTimeout(() => {
      // router.replace('./(tabs)')
      router.replace('/login')
    }, 1000);
  },[])


  return(
        <View style={styles.root}>
            <Image style={styles.logo_main} source={icon_main_logo} />
        </View>
    );
}

const styles = StyleSheet.create({
  root: {
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      flexDirection: 'column',
      alignItems: 'center',
  },
  logo_main: {
      width: 200,
      height: 105,
      marginTop: 200,
      resizeMode: 'contain',
  },
});
