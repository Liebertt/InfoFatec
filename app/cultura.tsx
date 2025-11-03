import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function CulturaScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=1200&q=80' }}
          style={styles.bannerImage}
        />
        <View style={styles.overlay} />
        <Text style={styles.bannerTitle}>Cultura e Arte</Text>
        <Text style={styles.bannerSubtitle}>Inspiração, Criatividade e Expressão</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Cultura Acadêmica</Text>
        <Text style={styles.paragraph}>
          A InfoFatec valoriza a cultura como pilar essencial do desenvolvimento humano e social. 
          Promovemos eventos artísticos, feiras literárias e mostras culturais que estimulam o pensamento crítico e a sensibilidade estética.
        </Text>

        <Text style={styles.sectionTitle}>Atividades e Eventos</Text>
        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Semana da Cultura</Text>
            <Text style={styles.cardText}>
              Oficinas, apresentações e debates que celebram a diversidade e a arte dentro da comunidade acadêmica.
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Mostra de Cinema Universitário</Text>
            <Text style={styles.cardText}>
              Exibição de curtas e documentários produzidos por alunos e parceiros culturais.
            </Text>
          </View>
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Saiba mais</Text>
        </Pressable>

        <Link href="/" asChild>
          <Pressable style={styles.backButton}>
            <Text style={styles.backText}>← Voltar ao Início</Text>
          </Pressable>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#f5f6fa', flex: 1 },
  banner: { position: 'relative', height: 250, justifyContent: 'center', alignItems: 'center' },
  bannerImage: { width: '100%', height: '100%' },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.45)' },
  bannerTitle: { position: 'absolute', color: '#fff', fontSize: 26, fontWeight: '700', textAlign: 'center' },
  bannerSubtitle: { position: 'absolute', bottom: 40, color: '#f0f0f0', fontSize: 16, textAlign: 'center' },
  content: { padding: 20 },
  sectionTitle: { fontSize: 22, fontWeight: '700', color: '#6C3483', marginTop: 24, marginBottom: 8 },
  paragraph: { fontSize: 16, color: '#2f3640', lineHeight: 24, textAlign: 'justify' },
  cardsContainer: { marginTop: 10 },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 16, marginVertical: 8, elevation: 3 },
  cardTitle: { fontSize: 18, fontWeight: '600', color: '#6C3483', marginBottom: 6 },
  cardText: { fontSize: 15, color: '#555' },
  button: { backgroundColor: '#8E44AD', paddingVertical: 14, borderRadius: 10, alignItems: 'center', marginTop: 25 },
  buttonText: { color: '#fff', fontSize: 17, fontWeight: '600' },
  backButton: { marginTop: 20, alignSelf: 'center' },
  backText: { color: '#8E44AD', fontSize: 16, fontWeight: '500' },
});
