import { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Header from './components/Header';
import GoalCount from './components/GoalCount';
import ClearButton from './components/ClearButton';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
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
    <SafeAreaView style={styles.screen}>
      <Header titulo="Meus Objetivos de 2026" corFundo="#311b6b" />

      <View style={styles.container}>
        <GoalInput
          enteredGoalText={enteredGoalText}
          onInputChange={inputHandler}
          onAddGoal={addGoalHandler}
        />

        <GoalCount quantidade={courseGoals.length} />

        <View style={styles.goalsContainer}>
          {courseGoals.length === 0 ? (
            <Text style={styles.emptyText}>
              Nenhum objetivo cadastrado ainda.
            </Text>
          ) : (
            <FlatList
              data={courseGoals}
              keyExtractor={(item) => item.id}
              alwaysBounceVertical={false}
              renderItem={({ item }) => (
                <GoalItem
                  text={item.text}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f4f1ff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
  },
  goalsContainer: {
    flex: 1,
    marginTop: 16,
  },
  emptyText: {
    marginTop: 40,
    textAlign: 'center',
    color: '#6b6478',
    fontSize: 16,
  },
});