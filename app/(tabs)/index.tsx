import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>InfoFatec</Text>

      <Link href="/cultura" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Cultura</Text>
        </Pressable>
      </Link>

      <Link href="/educacao" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Educação</Text>
        </Pressable>
      </Link>

      <Link href="/empregos" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Empregos</Text>
        </Pressable>
      </Link>

      <Link href="/seguranca" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Segurança</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 16,
    width: '90%',
    borderRadius: 12,
    marginVertical: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
