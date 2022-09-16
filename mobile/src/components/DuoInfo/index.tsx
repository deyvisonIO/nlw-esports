import { View, Text, ColorValue } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

interface DuoProps {
    label: string,
    value: string,
    colorValue?: ColorValue,
}

export function DuoInfo({ colorValue = THEME.COLORS.TEXT,...props}: DuoProps ) {
  return (
    <View style={styles.container}>
        <Text style={[styles.label, { color: colorValue }]}>{props.label}</Text>
        <Text 
        style={styles.value}
        numberOfLines={1}
        >{props.value}</Text>
    </View>
  );
}