import CustomButton from '@/components/CustomButton';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Tab() {
  
  const user = { id: 1, name: "John Doe" };
  const config = { animation: true, rounded: false };
  
  return (
    <View style={styles.container}>
      <Text>Tab Setting</Text>
      

      <CustomButton<typeof user, typeof config>
        title="Click Me"
        color="#4CAF50"
        onPress={(data) => console.log(data)} // 打印出 'John Doe'
        data={user}
        config={config}
        disabled={false} // 按钮禁用
        disabledStyle={{ backgroundColor: "#888" }} // 自定义禁用样式
        activeOpacity={0.8} // TouchableOpacity 属性
        style={{ backgroundColor: "red" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
