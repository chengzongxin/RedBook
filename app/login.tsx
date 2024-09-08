import { StyleSheet, Text, View, Image, Linking, TouchableOpacity } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import icon_main_logo from "@/assets/images/icon_main_logo.png";
import icon_unselected from "@/assets/images/icon_unselected.png";
import icon_selected from "@/assets/images/icon_selected.png";
import icon_arrow from "@/assets/images/icon_arrow.png";
import icon_wx from "@/assets/images/icon_wx.png";
import icon_qq from "@/assets/images/icon_qq.webp";

const login = () => {
  return (
    <View style={styles.container}>
      {/* logo */}
      <Image style={styles.logo_main} source={icon_main_logo} />
      {/* 底部登录块 */}
      <View style={styles.content}>
        {/* 一键登录 */}
        <TouchableOpacity style={[styles.quick_login, { backgroundColor: 'red' }]}>
          <Text style={styles.quick_login_text}>
            一键登录
          </Text>
        </TouchableOpacity>
        {/* 微信登录 */}
        <TouchableOpacity style={[styles.quick_login, { backgroundColor: 'green' }]}>
          <Image style={styles.wx_icon} source={icon_wx} />
          <Text style={styles.quick_login_text}>
            微信登录
          </Text>
        </TouchableOpacity>
        {/* 其他方式 */}
        <TouchableOpacity style={styles.other_login}>
          <Text>
            其他方式登录
          </Text>
          <Image style={styles.other_arrow} source={icon_arrow} />
        </TouchableOpacity>
        {/* 隐私协议 */}
        <View style={allStyles.protocolLayout}>
          <Image style={styles.selectIcon} source={icon_unselected} />
          <Text style={allStyles.lableTxt}>
            我已阅读并同意
            <Text
              style={allStyles.protocolTxt}
              onPress={() => {
                Linking.openURL("https://www.baidu.com");
              }}
            >
              《用户协议》
            </Text>
            <Text
              style={allStyles.lableTxt}
            >
              和
            </Text>
            <Text
              style={allStyles.protocolTxt}
              onPress={() => {
                Linking.openURL("https://www.baidu.com");
              }}
            >
              《隐私政策》
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
  },
  logo_main: {
    width: 200,
    height: 105,
    marginTop: 200,
    resizeMode: "contain",
  },
  content: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 40,
    paddingBottom: 34,
  },
  wx_login: {

  },
  quick_login: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    overflow: 'hidden',
  },
  wx_icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  quick_login_text: {
    // width: '100%',
    height: 44,
    // textAlign: 'center',
    // textAlignVertical: 'center',
    lineHeight: 44,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  other_login: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  other_arrow: {
    width: 12,
    height: 12,
    transform: [
      { rotate: '180deg' },
    ],
  },
  selectIcon: {
    width: 20,
    height: 20,
  },
});

const allStyles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
  },
  protocolLayout: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
    marginTop: 12,
  },
  radioButton: {
    width: 20,
    height: 20,
  },
  lableTxt: {
    fontSize: 12,
    color: "#999",
    marginLeft: 6,
  },
  protocolTxt: {
    fontSize: 12,
    color: "#1020ff",
  },
});