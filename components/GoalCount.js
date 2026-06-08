import { StyleSheet, Text, View } from 'react-native';

export default function GoalCount(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Você tem {props.quantidade} objetivos cadastrados.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    padding: 14,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ddd6ff',
  },
  text: {
    color: '#311b6b',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
});