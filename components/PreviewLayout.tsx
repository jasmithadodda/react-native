import { Text, View ,StyleSheet, TouchableOpacity} from "react-native";
import { PreviewLayoutProps } from "./previewprops";
import { styles } from "./styles";


export const PreviewLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue,
  }: PreviewLayoutProps) => (
    <View style={{padding: 10, flex: 1}}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        {values.map(value => (
          <TouchableOpacity
            key={value}
            onPress={() => setSelectedValue(value)}
            style={[styles.button, selectedValue === value && styles.selected]}>
            <Text
              style={[
                styles.buttonLabel,
                selectedValue === value && styles.selectedLabel,
              ]}>
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
    </View>
  );