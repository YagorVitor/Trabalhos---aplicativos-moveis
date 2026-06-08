import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function GoalItem(props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.goalItem,
        pressed && styles.goalItemPressed,
      ]}
      onPress={props.onDelete}
    >
      <View>
        <Text style={styles.goalText}>{props.text}</Text>
        <Text style={styles.helperText}>Toque para remover</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginBottom: 10,
    padding: 14,
    borderRadius: 14,
    backgroundColor: '#5e0acc',
  },
  goalItemPressed: {
    opacity: 0.75,
  },
  goalText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  helperText: {
    marginTop: 4,
    color: '#d8ccff',
    fontSize: 12,
  },
});