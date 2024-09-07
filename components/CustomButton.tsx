
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

// 定义泛型接口，包含两个泛型参数 T 和 U，并继承 TouchableOpacityProps
interface CustomButtonProps<T, U> extends TouchableOpacityProps {
  title: string;               // 按钮文本
  onPress: (data: T) => void;  // 点击事件回调，传递泛型参数 T
  data?: T;                    // 额外的数据，类型由泛型 T 决定
  config?: U;                  // 额外的配置选项，类型由泛型 U 决定
  disabledStyle?: object;      // 当按钮被禁用时的自定义样式
  color?: string;
}

// 创建函数式组件，使用两个泛型参数，并继承 TouchableOpacityProps 的所有属性
const CustomButton = <T, U>({
  title,
  onPress,
  data,
  config,
  disabled,
  disabledStyle,
  style,
  ...restProps
}: CustomButtonProps<T, U>) => {
  // 根据 disabled 状态来应用不同的样式
  const buttonStyle = [
    styles.button,
    style,
    disabled ? (disabledStyle || styles.disabledButton) : {},
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={() => !disabled && onPress(data!)} // 按钮禁用时不触发 onPress
      disabled={disabled}
      {...restProps}  // 继承 TouchableOpacityProps 的其他属性
    > 
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

// 定义样式
const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',  // 默认禁用样式
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CustomButton;

