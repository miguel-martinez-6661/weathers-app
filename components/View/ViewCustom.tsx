import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleProp, View as RNView, ViewStyle } from 'react-native';
import style from './styles';

type ViewProps = {
  children: any;
  styles?: StyleProp<ViewStyle>;
};

const ViewCustom: React.FC<ViewProps> = ({ children, styles }) => {
  const { colors } = useTheme();
  return (
    <RNView
      style={[style.container, { backgroundColor: colors.background }, styles]}
    >
      {children}
    </RNView>
  );
};

export default ViewCustom;
