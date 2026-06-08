import { Pressable, StyleSheet, Text, View } from 'react-native';
import { CheckCircle2, Trash2 } from 'lucide-react-native';

import SectionIcon from './SectionIcon';
import { colors, radius } from './theme';

export default function ListItem(props) {
  return (
    <Pressable
      android_ripple={{ color: 'rgba(167, 139, 250, 0.18)' }}
      style={({ pressed }) => [
        styles.item,
        pressed && styles.itemPressed,
      ]}
      onPress={props.onDeleteItem.bind(this, props.id)}
    >
      <View style={styles.left}>
        <View
          style={[
            styles.marker,
            {
              backgroundColor: `${props.accent}22`,
              borderColor: `${props.accent}66`,
            },
          ]}
        >
          <SectionIcon
            sectionId={props.sectionId}
            color={props.accent}
            size={20}
          />
        </View>

        <View style={styles.content}>
          <View style={styles.titleRow}>
            <CheckCircle2 size={18} color={props.accent} strokeWidth={2.6} />
            <Text style={styles.itemText}>{props.text}</Text>
          </View>

          <View style={styles.metaRow}>
            <Text style={styles.sectionLabel}>{props.sectionLabel}</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.createdAt}>{props.createdAt}</Text>
          </View>
        </View>
      </View>

      <View style={styles.deleteBox}>
        <Trash2 size={18} color={colors.red} strokeWidth={2.5} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
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
    overflow: 'hidden',
  },
  itemPressed: {
    opacity: 0.78,
    transform: [{ scale: 0.99 }],
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    minWidth: 0,
  },
  marker: {
    width: 44,
    height: 44,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  content: {
    flex: 1,
    minWidth: 0,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },
  itemText: {
    flex: 1,
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
  },
  metaRow: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    flexWrap: 'wrap',
  },
  sectionLabel: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '800',
  },
  dot: {
    color: colors.textDim,
    fontSize: 12,
    fontWeight: '900',
  },
  createdAt: {
    color: colors.textDim,
    fontSize: 12,
    fontWeight: '700',
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
