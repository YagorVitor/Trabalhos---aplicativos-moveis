import { useMemo, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Header from './components/Header';
import ItemInput from './components/ItemInput';
import ListItem from './components/ListItem';
import SectionTabs from './components/SectionTabs';
import AgendaStats from './components/AgendaStats';
import EmptyState from './components/EmptyState';
import ClearButton from './components/ClearButton';
import SectionIcon from './components/SectionIcon';
import { AGENDA_SECTIONS, ALL_SECTION } from './components/sectionConfig';
import { colors, radius, shadow } from './components/theme';

export default function App() {
  const { width } = useWindowDimensions();
  const isCompact = width < 720;

  const [agendaItems, setAgendaItems] = useState([]);
  const [activeSectionId, setActiveSectionId] = useState('all');

  const sectionsWithAll = [ALL_SECTION, ...AGENDA_SECTIONS];

  const visibleItems = useMemo(() => {
    if (activeSectionId === 'all') {
      return agendaItems;
    }

    return agendaItems.filter((item) => item.sectionId === activeSectionId);
  }, [agendaItems, activeSectionId]);

  const activeSection =
    sectionsWithAll.find((section) => section.id === activeSectionId) ||
    ALL_SECTION;

  function addItemHandler(itemText, sectionId) {
    const trimmedText = itemText.trim();

    if (!trimmedText) {
      return;
    }

    setAgendaItems((currentItems) => [
      {
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        text: trimmedText,
        sectionId,
        createdAt: new Date().toLocaleString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        }),
      },
      ...currentItems,
    ]);
  }

  function deleteItemHandler(itemId) {
    setAgendaItems((currentItems) =>
      currentItems.filter((item) => item.id !== itemId)
    );
  }

  function clearAllHandler() {
    setAgendaItems([]);
    setActiveSectionId('all');
  }

  function getSectionById(sectionId) {
    return (
      AGENDA_SECTIONS.find((section) => section.id === sectionId) ||
      AGENDA_SECTIONS[0]
    );
  }

  return (
    <LinearGradient
      colors={['#030712', '#07111f', '#120b2f']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.screen}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.glowPurple} />
        <View style={styles.glowCyan} />

        <ScrollView
          style={styles.scroll}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={[
            styles.scrollContent,
            isCompact && styles.scrollContentCompact,
          ]}
        >
          <View style={[styles.page, isCompact && styles.pageCompact]}>
            <View style={[styles.appShell, isCompact && styles.appShellCompact]}>
              <Header
                titulo="Agenda Pessoal Inteligente"
                subtitulo="Centralize objetivos, compras, estudos, ideias e compromissos em uma experiência modular e organizada."
                isCompact={isCompact}
              />

              <AgendaStats
                items={agendaItems}
                sections={AGENDA_SECTIONS}
                isCompact={isCompact}
              />

              <SectionTabs
                sections={sectionsWithAll}
                activeSectionId={activeSectionId}
                onChangeSection={setActiveSectionId}
                items={agendaItems}
              />

              <ItemInput
                sections={AGENDA_SECTIONS}
                activeSectionId={activeSectionId}
                onAddItem={addItemHandler}
                isCompact={isCompact}
              />

              <View style={styles.listHeader}>
                <View style={styles.listTitleGroup}>
                  <Text style={styles.listEyebrow}>Seção atual</Text>

                  <View style={styles.listTitleRow}>
                    <View
                      style={[
                        styles.listIconBox,
                        { borderColor: `${activeSection.accent}66` },
                      ]}
                    >
                      <SectionIcon
                        sectionId={activeSection.id}
                        color={activeSection.accent}
                        size={18}
                      />
                    </View>

                    <Text style={styles.listTitle}>{activeSection.label}</Text>
                  </View>
                </View>

                <Text style={styles.listCount}>
                  {visibleItems.length} {visibleItems.length === 1 ? 'item' : 'itens'}
                </Text>
              </View>

              {visibleItems.length === 0 ? (
                <EmptyState section={activeSection} />
              ) : (
                <FlatList
                  data={visibleItems}
                  keyExtractor={(item) => item.id}
                  scrollEnabled={false}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={styles.listContent}
                  renderItem={({ item }) => {
                    const section = getSectionById(item.sectionId);

                    return (
                      <ListItem
                        id={item.id}
                        text={item.text}
                        createdAt={item.createdAt}
                        sectionId={section.id}
                        sectionLabel={section.label}
                        accent={section.accent}
                        onDeleteItem={deleteItemHandler}
                      />
                    );
                  }}
                />
              )}

              {agendaItems.length > 0 && (
                <ClearButton onClear={clearAllHandler} />
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    minHeight: '100%',
    backgroundColor: colors.background,
  },
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: 28,
    paddingHorizontal: 22,
  },
  scrollContentCompact: {
    paddingVertical: 14,
    paddingHorizontal: 14,
  },
  glowPurple: {
    position: 'absolute',
    top: -180,
    right: -120,
    width: 460,
    height: 460,
    borderRadius: 460,
    backgroundColor: 'rgba(139, 92, 246, 0.24)',
  },
  glowCyan: {
    position: 'absolute',
    bottom: -160,
    left: -140,
    width: 420,
    height: 420,
    borderRadius: 420,
    backgroundColor: 'rgba(34, 211, 238, 0.10)',
  },
  page: {
    width: '100%',
    maxWidth: 1040,
    alignSelf: 'center',
  },
  pageCompact: {
    maxWidth: '100%',
  },
  appShell: {
    width: '100%',
    padding: 22,
    borderRadius: radius.xl,
    backgroundColor: colors.shell,
    borderWidth: 1,
    borderColor: colors.shellBorder,
    ...shadow,
  },
  appShellCompact: {
    padding: 16,
    borderRadius: radius.lg,
  },
  listHeader: {
    marginTop: 18,
    marginBottom: 12,
    paddingHorizontal: 2,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 12,
  },
  listTitleGroup: {
    flex: 1,
  },
  listEyebrow: {
    color: colors.textDim,
    fontSize: 12,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  listTitleRow: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  listIconBox: {
    width: 36,
    height: 36,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(15, 23, 42, 0.88)',
    borderWidth: 1,
  },
  listTitle: {
    flex: 1,
    color: colors.text,
    fontSize: 22,
    fontWeight: '900',
  },
  listCount: {
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: '800',
  },
  listContent: {
    paddingBottom: 2,
  },
});
