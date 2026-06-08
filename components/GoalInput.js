import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function GoalInput(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Digite seu objetivo"
        placeholderTextColor="#8f86a8"
        value={props.enteredGoalText}
        onChangeText={props.onInputChange}
        onSubmitEditing={props.onAddGoal}
        returnKeyType="done"
      />

      <Pressable
        style={({ pressed }) => [
          styles.addButton,
          pressed && styles.buttonPressed,
        ]}
        onPress={props.onAddGoal}
      >
        <Text style={styles.addButtonText}>Adicionar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#c9bfff',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: '#201833',
    fontSize: 15,
  },
  addButton: {
    backgroundColor: '#5e0acc',
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderRadius: 12,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  addButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});