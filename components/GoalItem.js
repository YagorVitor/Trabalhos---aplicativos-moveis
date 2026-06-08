import { Pressable, StyleSheet, Text, View } from 'react-native';
import { CheckCircle2, Trash2 } from 'lucide-react-native';

import { colors, radius } from './theme';

export default function GoalItem(props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.goalItem,
        pressed && styles.goalItemPressed,
      ]}
      onPress={props.onDelete}
    >
      <View style={styles.left}>
        <View style={styles.indexBox}>
          <Text style={styles.indexText}>{props.index + 1}</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.titleRow}>
            <CheckCircle2 size={18} color={colors.green} strokeWidth={2.6} />
            <Text style={styles.goalText}>{props.text}</Text>
          </View>

          <Text style={styles.helperText}>Clique para remover da lista</Text>
        </View>
      </View>

      <View style={styles.deleteBox}>
        <Trash2 size={18} color={colors.red} strokeWidth={2.5} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginBottom: 12,
    padding: 16,
    borderRadius: radius.lg,
    backgroundColor: 'rgba(15, 23, 42, 0.92)',
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 14,
  },
  goalItemPressed: {
    opacity: 0.78,
    transform: [{ scale: 0.99 }],
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  indexBox: {
    width: 42,
    height: 42,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(167, 139, 250, 0.14)',
    borderWidth: 1,
    borderColor: 'rgba(167, 139, 250, 0.24)',
  },
  indexText: {
    color: colors.primaryLight,
    fontWeight: '900',
    fontSize: 14,
  },
  content: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },
  goalText: {
    flex: 1,
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
  },
  helperText: {
    marginTop: 5,
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '600',
  },
  deleteBox: {
    width: 42,
    height: 42,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(251, 113, 133, 0.10)',
    borderWidth: 1,
    borderColor: 'rgba(251, 113, 133, 0.18)',
  },
});
