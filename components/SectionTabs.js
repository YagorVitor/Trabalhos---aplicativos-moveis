import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import SectionIcon from './SectionIcon';
import { colors, radius } from './theme';

export default function SectionTabs(props) {
  function getCount(sectionId) {
    if (sectionId === 'all') {
      return props.items.length;
    }

    return props.items.filter((item) => item.sectionId === sectionId).length;
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Categorias</Text>
        <Text style={styles.subtitle}>Filtre sua agenda</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsContent}
      >
        {props.sections.map((section) => {
          const isActive = props.activeSectionId === section.id;
          const count = getCount(section.id);

          return (
            <Pressable
              key={section.id}
              android_ripple={{ color: 'rgba(167, 139, 250, 0.18)' }}
              onPress={props.onChangeSection.bind(this, section.id)}
              style={({ pressed }) => [
                styles.tab,
                isActive && styles.tabActive,
                pressed && styles.tabPressed,
              ]}
            >
              <View
                style={[
                  styles.iconBox,
                  isActive && {
                    borderColor: `${section.accent}66`,
                    backgroundColor: `${section.accent}1F`,
                  },
                ]}
              >
                <SectionIcon
                  sectionId={section.id}
                  color={isActive ? section.accent : colors.textMuted}
                  size={19}
                />
              </View>

              <View style={styles.tabTextGroup}>
                <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
                  {section.label}
                </Text>

                <Text style={[styles.tabCount, isActive && styles.tabCountActive]}>
                  {count} {count === 1 ? 'item' : 'itens'}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 14,
  },
  headerRow: {
    marginBottom: 10,
    paddingHorizontal: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.textDim,
    fontSize: 12,
    fontWeight: '700',
  },
  tabsContent: {
    gap: 10,
    paddingRight: 4,
  },
  tab: {
    minWidth: 154,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: radius.lg,
    backgroundColor: 'rgba(15, 23, 42, 0.72)',
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    overflow: 'hidden',
  },
  tabActive: {
    backgroundColor: 'rgba(139, 92, 246, 0.18)',
    borderColor: colors.borderStrong,
  },
  tabPressed: {
    opacity: 0.78,
    transform: [{ scale: 0.98 }],
  },
  iconBox: {
    width: 38,
    height: 38,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(2, 6, 23, 0.50)',
    borderWidth: 1,
    borderColor: colors.border,
  },
  tabTextGroup: {
    flex: 1,
  },
  tabLabel: {
    color: colors.textSoft,
    fontSize: 13,
    fontWeight: '900',
  },
  tabLabelActive: {
    color: colors.text,
  },
  tabCount: {
    marginTop: 2,
    color: colors.textDim,
    fontSize: 11,
    fontWeight: '700',
  },
  tabCountActive: {
    color: colors.primaryLight,
  },
});
