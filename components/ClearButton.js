import { Pressable, StyleSheet, Text } from 'react-native';
import { Trash2 } from 'lucide-react-native';

import { colors, radius } from './theme';

export default function ClearButton(props) {
  return (
    <Pressable
      android_ripple={{ color: 'rgba(251, 113, 133, 0.18)' }}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
      ]}
      onPress={props.onClear}
    >
      <Trash2 size={18} color="#fecdd3" strokeWidth={2.5} />
      <Text style={styles.buttonText}>Limpar agenda inteira</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 4,
    minHeight: 54,
    paddingHorizontal: 18,
    borderRadius: radius.md,
    backgroundColor: 'rgba(251, 113, 133, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(251, 113, 133, 0.28)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    overflow: 'hidden',
  },
  buttonPressed: {
    opacity: 0.78,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: '#fecdd3',
    fontSize: 15,
    fontWeight: '900',
  },
});
