import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

export enum FontWeight {
  bold = 'bold',
  semibold = 'semibold',
}

export enum FontSize {
  big = 'big',
  regular = 'regular',
  small = 'small',
}

type TextCustomProps = {
  children: any;
  weight?: FontWeight;
  size?: FontSize;
  color?: string;
}

const TextCustom: React.FC<TextCustomProps> = ({
  children, weight, size, color,
}) => {
  const { colors } = useTheme();

  return (
    <Text style={[
      styles[weight],
      styles[size],
      { color: color || colors.text },
    ]}
    >
      {children}
    </Text>
  );
};

export default TextCustom;
