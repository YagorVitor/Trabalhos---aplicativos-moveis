import { StyleSheet, Text, View } from 'react-native';
import { CalendarDays, Sparkles } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { colors, radius } from './theme';

export default function Header(props) {
  return (
    <LinearGradient
      colors={['rgba(139, 92, 246, 0.30)', 'rgba(34, 211, 238, 0.08)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.hero, props.isCompact && styles.heroCompact]}
    >
      <View style={styles.topRow}>
        <View style={styles.badge}>
          <Sparkles size={15} color={colors.primaryLight} strokeWidth={2.8} />
          <Text style={styles.badgeText}>Hub pessoal</Text>
        </View>

        <View style={styles.yearBadge}>
          <CalendarDays size={15} color={colors.cyan} strokeWidth={2.5} />
          <Text style={styles.yearText}>2026</Text>
        </View>
      </View>

      <Text style={[styles.title, props.isCompact && styles.titleCompact]}>
        {props.titulo}
      </Text>

      <Text style={styles.subtitle}>{props.subtitulo}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  hero: {
    padding: 26,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.borderStrong,
    marginBottom: 18,
  },
  heroCompact: {
    padding: 20,
    borderRadius: radius.lg,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 22,
    gap: 12,
  },
  badge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(15, 23, 42, 0.72)',
    borderWidth: 1,
    borderColor: colors.borderStrong,
  },
  badgeText: {
    color: colors.primaryLight,
    fontSize: 13,
    fontWeight: '800',
  },
  yearBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(34, 211, 238, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(34, 211, 238, 0.22)',
  },
  yearText: {
    color: colors.cyan,
    fontSize: 13,
    fontWeight: '900',
  },
  title: {
    color: colors.text,
    fontSize: 40,
    lineHeight: 46,
    fontWeight: '900',
    letterSpacing: -1.2,
  },
  titleCompact: {
    fontSize: 30,
    lineHeight: 36,
  },
  subtitle: {
    marginTop: 12,
    color: colors.textSoft,
    fontSize: 16,
    lineHeight: 24,
    maxWidth: 740,
  },
});
