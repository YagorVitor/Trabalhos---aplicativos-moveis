import { StyleSheet, Text, View } from 'react-native';
import { ListChecks, Target, TrendingUp } from 'lucide-react-native';

import { colors, radius } from './theme';

export default function GoalCount(props) {
  return (
    <View style={styles.container}>
      <View style={styles.statCard}>
        <View style={styles.iconBox}>
          <Target size={22} color={colors.primaryLight} strokeWidth={2.7} />
        </View>

        <View style={styles.statText}>
          <Text style={styles.number}>{props.quantidade}</Text>
          <Text style={styles.label}>
            {props.quantidade === 1
              ? 'objetivo cadastrado'
              : 'objetivos cadastrados'}
          </Text>
        </View>

        <View style={styles.progressPill}>
          <TrendingUp size={15} color={colors.green} strokeWidth={2.7} />
          <Text style={styles.progressText}>em progresso</Text>
        </View>
      </View>

      <View style={styles.tipCard}>
        <ListChecks size={18} color={colors.cyan} strokeWidth={2.5} />
        <Text style={styles.tipText}>
          Toque em um objetivo para remover da lista.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    marginBottom: 2,
  },
  statCard: {
    padding: 18,
    borderRadius: radius.lg,
    backgroundColor: 'rgba(139, 92, 246, 0.14)',
    borderWidth: 1,
    borderColor: colors.borderStrong,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(139, 92, 246, 0.18)',
    borderWidth: 1,
    borderColor: 'rgba(167, 139, 250, 0.28)',
  },
  statText: {
    flex: 1,
  },
  number: {
    color: colors.text,
    fontSize: 32,
    fontWeight: '900',
    lineHeight: 34,
  },
  label: {
    marginTop: 3,
    color: colors.textSoft,
    fontSize: 14,
    fontWeight: '700',
  },
  progressPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: 'rgba(52, 211, 153, 0.10)',
    borderWidth: 1,
    borderColor: 'rgba(52, 211, 153, 0.20)',
  },
  progressText: {
    color: colors.green,
    fontSize: 12,
    fontWeight: '900',
  },
  tipCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: radius.md,
    backgroundColor: 'rgba(34, 211, 238, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(34, 211, 238, 0.14)',
  },
  tipText: {
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: '700',
  },
});
