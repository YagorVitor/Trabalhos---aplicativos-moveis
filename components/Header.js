import { StyleSheet, Text, View } from 'react-native';

export default function Header(props) {
  return (
    <View
      style={[
        styles.header,
        { backgroundColor: props.corFundo || '#311b6b' },
      ]}
    >
      <Text style={styles.title}>{props.titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 56,
    paddingBottom: 24,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});