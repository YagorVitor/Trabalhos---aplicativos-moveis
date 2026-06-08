import { StyleSheet, Text, View } from 'react-native';
import { Layers3, ListChecks, TrendingUp } from 'lucide-react-native';

import { colors, radius } from './theme';

export default function AgendaStats(props) {
  const total = props.items.length;
  const activeSections = props.sections.filter((section) =>
    props.items.some((item) => item.sectionId === section.id)
  ).length;

  return (
    <View style={[styles.container, props.isCompact && styles.containerCompact]}>
      <View style={styles.cardPrimary}>
        <View style={styles.iconBox}>
          <ListChecks size={22} color={colors.primaryLight} strokeWidth={2.7} />
        </View>

        <View style={styles.statText}>
          <Text style={styles.number}>{total}</Text>
          <Text style={styles.label}>
            {total === 1 ? 'item na agenda' : 'itens na agenda'}
          </Text>
        </View>
      </View>

      <View style={styles.cardSecondary}>
        <View style={styles.iconBoxSoft}>
          <Layers3 size={20} color={colors.green} strokeWidth={2.7} />
        </View>

        <View style={styles.statText}>
          <Text style={styles.numberSmall}>{activeSections}</Text>
          <Text style={styles.label}>seções em uso</Text>
        </View>

        <TrendingUp size={18} color={colors.green} strokeWidth={2.7} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 14,
  },
  containerCompact: {
    flexDirection: 'column',
  },
  cardPrimary: {
    flex: 1.25,
    padding: 18,
    borderRadius: radius.lg,
    backgroundColor: 'rgba(139, 92, 246, 0.14)',
    borderWidth: 1,
    borderColor: colors.borderStrong,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  cardSecondary: {
    flex: 1,
    padding: 18,
    borderRadius: radius.lg,
    backgroundColor: 'rgba(52, 211, 153, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(52, 211, 153, 0.16)',
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
  iconBoxSoft: {
    width: 52,
    height: 52,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 211, 153, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(52, 211, 153, 0.18)',
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
  numberSmall: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '900',
    lineHeight: 32,
  },
  label: {
    marginTop: 3,
    color: colors.textSoft,
    fontSize: 14,
    fontWeight: '700',
  },
});
