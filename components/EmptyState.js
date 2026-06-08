import { StyleSheet, Text, View } from 'react-native';
import { PlusCircle } from 'lucide-react-native';

import SectionIcon from './SectionIcon';
import { colors, radius } from './theme';

export default function EmptyState(props) {
  return (
    <View style={styles.emptyCard}>
      <View
        style={[
          styles.iconBox,
          {
            borderColor: `${props.section.accent}66`,
            backgroundColor: `${props.section.accent}1F`,
          },
        ]}
      >
        <SectionIcon
          sectionId={props.section.id}
          color={props.section.accent}
          size={30}
        />
      </View>

      <Text style={styles.title}>Nada por aqui ainda</Text>

      <Text style={styles.text}>
        Adicione um item em {props.section.label.toLowerCase()} para deixar sua
        agenda mais completa e organizada.
      </Text>

      <View style={styles.helper}>
        <PlusCircle size={16} color={colors.primaryLight} strokeWidth={2.5} />
        <Text style={styles.helperText}>Use o campo acima para começar</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyCard: {
    minHeight: 280,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    borderRadius: radius.lg,
    backgroundColor: 'rgba(15, 23, 42, 0.78)',
    borderWidth: 1,
    borderColor: colors.border,
  },
  iconBox: {
    width: 68,
    height: 68,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginBottom: 18,
  },
  title: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 23,
    textAlign: 'center',
    maxWidth: 500,
  },
  helper: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 999,
    backgroundColor: 'rgba(139, 92, 246, 0.10)',
    borderWidth: 1,
    borderColor: colors.borderStrong,
  },
  helperText: {
    color: colors.primaryLight,
    fontSize: 12,
    fontWeight: '900',
  },
});
