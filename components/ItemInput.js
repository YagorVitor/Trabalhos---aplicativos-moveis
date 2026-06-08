import { useEffect, useMemo, useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Plus } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

import SectionIcon from './SectionIcon';
import { colors, radius } from './theme';

export default function ItemInput(props) {
  const [enteredItemText, setEnteredItemText] = useState('');
  const [selectedSectionId, setSelectedSectionId] = useState(
    props.sections[0]?.id || 'goals'
  );

  useEffect(() => {
    if (props.activeSectionId && props.activeSectionId !== 'all') {
      setSelectedSectionId(props.activeSectionId);
    }
  }, [props.activeSectionId]);

  const selectedSection = useMemo(() => {
    return (
      props.sections.find((section) => section.id === selectedSectionId) ||
      props.sections[0]
    );
  }, [props.sections, selectedSectionId]);

  const isDisabled = enteredItemText.trim().length === 0;

  function inputHandler(enteredText) {
    setEnteredItemText(enteredText);
  }

  function addItemHandler() {
    const trimmedText = enteredItemText.trim();

    if (!trimmedText) {
      return;
    }

    props.onAddItem(trimmedText, selectedSectionId);
    setEnteredItemText('');
  }

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <View style={styles.heading}>
          <Text style={styles.label}>Novo item</Text>
          <Text style={styles.description}>
            Escolha uma seção e adicione algo à sua agenda.
          </Text>
        </View>

        <View style={styles.currentPill}>
          <SectionIcon
            sectionId={selectedSection.id}
            color={selectedSection.accent}
            size={15}
          />
          <Text style={styles.currentText}>{selectedSection.label}</Text>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.sectionContent}
      >
        {props.sections.map((section) => {
          const isActive = selectedSectionId === section.id;

          return (
            <Pressable
              key={section.id}
              android_ripple={{ color: 'rgba(167, 139, 250, 0.18)' }}
              onPress={setSelectedSectionId.bind(this, section.id)}
              style={({ pressed }) => [
                styles.sectionChip,
                isActive && styles.sectionChipActive,
                pressed && styles.sectionChipPressed,
              ]}
            >
              <SectionIcon
                sectionId={section.id}
                color={isActive ? section.accent : colors.textMuted}
                size={16}
              />

              <Text
                style={[
                  styles.sectionLabel,
                  isActive && styles.sectionLabelActive,
                ]}
              >
                {section.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <View style={[styles.inputRow, props.isCompact && styles.inputRowCompact]}>
        <TextInput
          style={styles.textInput}
          placeholder={selectedSection.placeholder}
          placeholderTextColor={colors.textDim}
          value={enteredItemText}
          onChangeText={inputHandler}
          onSubmitEditing={addItemHandler}
          returnKeyType="done"
          selectionColor={selectedSection.accent}
        />

        <Pressable
          disabled={isDisabled}
          onPress={addItemHandler}
          style={({ pressed }) => [
            styles.buttonWrapper,
            props.isCompact && styles.buttonWrapperCompact,
            pressed && !isDisabled && styles.buttonPressed,
            isDisabled && styles.buttonDisabled,
          ]}
        >
          <LinearGradient
            colors={
              isDisabled
                ? ['#334155', '#263244']
                : [selectedSection.accent, colors.primaryDark]
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
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 14,
  },
  heading: {
    flex: 1,
  },
  label: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '900',
  },
  description: {
    marginTop: 4,
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '700',
  },
  currentPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(139, 92, 246, 0.12)',
    borderWidth: 1,
    borderColor: colors.borderStrong,
  },
  currentText: {
    color: colors.primaryLight,
    fontSize: 12,
    fontWeight: '900',
  },
  sectionContent: {
    gap: 8,
    paddingBottom: 12,
  },
  sectionChip: {
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 999,
    backgroundColor: 'rgba(2, 6, 23, 0.74)',
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    overflow: 'hidden',
  },
  sectionChipActive: {
    backgroundColor: 'rgba(139, 92, 246, 0.18)',
    borderColor: colors.borderStrong,
  },
  sectionChipPressed: {
    opacity: 0.76,
    transform: [{ scale: 0.98 }],
  },
  sectionLabel: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '900',
  },
  sectionLabelActive: {
    color: colors.text,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  inputRowCompact: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  textInput: {
    flex: 1,
    width: '100%',
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
  buttonWrapperCompact: {
    width: '100%',
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
