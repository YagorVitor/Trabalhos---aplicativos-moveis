import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Plus } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { colors, radius } from './theme';

export default function GoalInput(props) {
  const isDisabled = props.enteredGoalText.trim().length === 0;

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.label}>Novo objetivo</Text>
        <Text style={styles.hint}>Enter para adicionar</Text>
      </View>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.textInput}
          placeholder="Ex: Estudar React Native todos os dias"
          placeholderTextColor={colors.textDim}
          value={props.enteredGoalText}
          onChangeText={props.onInputChange}
          onSubmitEditing={props.onAddGoal}
          returnKeyType="done"
          selectionColor={colors.primaryLight}
        />

        <Pressable
          disabled={isDisabled}
          onPress={props.onAddGoal}
          style={({ pressed }) => [
            styles.buttonWrapper,
            pressed && !isDisabled && styles.buttonPressed,
            isDisabled && styles.buttonDisabled,
          ]}
        >
          <LinearGradient
            colors={
              isDisabled
                ? ['#334155', '#263244']
                : [colors.primary, colors.primaryDark]
            }
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.addButton}
          >
            <Plus size={18} color="#ffffff" strokeWidth={3} />
            <Text style={styles.addButtonText}>Adicionar</Text>
          </LinearGradient>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: radius.lg,
    backgroundColor: 'rgba(15, 23, 42, 0.88)',
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 14,
  },
  headerRow: {
    marginBottom: 11,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '900',
  },
  hint: {
    color: colors.textDim,
    fontSize: 12,
    fontWeight: '700',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  textInput: {
    flex: 1,
    minHeight: 56,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.24)',
    borderRadius: radius.md,
    paddingHorizontal: 16,
    color: colors.text,
    fontSize: 15,
  },
  buttonWrapper: {
    borderRadius: radius.md,
    overflow: 'hidden',
  },
  addButton: {
    minHeight: 56,
    paddingHorizontal: 18,
    borderRadius: radius.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  addButtonText: {
    color: '#ffffff',
    fontWeight: '900',
    fontSize: 14,
  },
  buttonPressed: {
    opacity: 0.82,
    transform: [{ scale: 0.98 }],
  },
  buttonDisabled: {
    opacity: 0.55,
  },
});
