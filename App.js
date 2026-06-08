import { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Header from './components/Header';
import GoalCount from './components/GoalCount';
import ClearButton from './components/ClearButton';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { colors, radius, shadow } from './components/theme';

export default function App() {
  const { height } = useWindowDimensions();

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function inputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    const trimmedGoal = enteredGoalText.trim();

    if (!trimmedGoal) {
      return;
    }

    setCourseGoals((currentCourseGoals) => [
      {
        text: trimmedGoal,
        id: Date.now().toString(),
      },
      ...currentCourseGoals,
    ]);

    setEnteredGoalText('');
  }

  function deleteGoalHandler(goalId) {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.id !== goalId)
    );
  }

  function clearAllHandler() {
    setCourseGoals([]);
  }

  return (
    <LinearGradient
      colors={['#030712', '#07111f', '#120b2f']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.screen, { minHeight: height }]}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.glowPurple} />
        <View style={styles.glowCyan} />

        <View style={styles.page}>
          <View style={styles.appShell}>
            <Header
              titulo="Meus Objetivos de 2026"
              subtitulo="Organize suas metas, acompanhe seu progresso e transforme intenção em rotina."
            />

            <GoalInput
              enteredGoalText={enteredGoalText}
              onInputChange={inputHandler}
              onAddGoal={addGoalHandler}
            />

            <GoalCount quantidade={courseGoals.length} />

            <View style={styles.goalsContainer}>
              {courseGoals.length === 0 ? (
                <View style={styles.emptyCard}>
                  <View style={styles.emptyIconBox}>
                    <Text style={styles.emptyIcon}>✦</Text>
                  </View>

                  <Text style={styles.emptyTitle}>
                    Nenhum objetivo cadastrado
                  </Text>

                  <Text style={styles.emptyText}>
                    Adicione sua primeira meta para começar. Objetivos pequenos,
                    claros e visíveis são mais fáceis de cumprir.
                  </Text>
                </View>
              ) : (
                <FlatList
                  data={courseGoals}
                  keyExtractor={(item) => item.id}
                  alwaysBounceVertical={false}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={styles.listContent}
                  renderItem={({ item, index }) => (
                    <GoalItem
                      text={item.text}
                      index={index}
                      onDelete={() => deleteGoalHandler(item.id)}
                    />
                  )}
                />
              )}
            </View>

            {courseGoals.length > 0 && (
              <ClearButton onClear={clearAllHandler} />
            )}
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  safeArea: {
    flex: 1,
    overflow: 'hidden',
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
    flex: 1,
    width: '100%',
    maxWidth: 980,
    alignSelf: 'center',
    paddingHorizontal: 22,
    paddingVertical: 28,
  },
  appShell: {
    flex: 1,
    padding: 22,
    borderRadius: radius.xl,
    backgroundColor: colors.shell,
    borderWidth: 1,
    borderColor: colors.shellBorder,
    ...shadow,
  },
  goalsContainer: {
    flex: 1,
    marginTop: 18,
  },
  listContent: {
    paddingBottom: 8,
  },
  emptyCard: {
    flex: 1,
    minHeight: 260,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    borderRadius: radius.lg,
    backgroundColor: 'rgba(15, 23, 42, 0.78)',
    borderWidth: 1,
    borderColor: colors.border,
  },
  emptyIconBox: {
    width: 64,
    height: 64,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(139, 92, 246, 0.16)',
    borderWidth: 1,
    borderColor: colors.borderStrong,
    marginBottom: 18,
  },
  emptyIcon: {
    color: colors.primaryLight,
    fontSize: 34,
    fontWeight: '900',
  },
  emptyTitle: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 10,
    textAlign: 'center',
  },
  emptyText: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 23,
    textAlign: 'center',
    maxWidth: 500,
  },
});
