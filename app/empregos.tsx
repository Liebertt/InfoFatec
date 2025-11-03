import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function EmpregosScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80' }}
          style={styles.bannerImage}
        />
        <View style={styles.overlay} />
        <Text style={styles.bannerTitle}>Empregabilidade e Carreira</Text>
        <Text style={styles.bannerSubtitle}>Conectando Talentos e Oportunidades</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Desenvolvimento Profissional</Text>
        <Text style={styles.paragraph}>
          A InfoFatec oferece suporte para que os alunos ingressem no mercado de trabalho com confiança e preparo técnico.
          Parcerias com empresas líderes proporcionam estágios, mentorias e programas de trainee.
        </Text>

        <Text style={styles.sectionTitle}>Oportunidades Recentes</Text>
        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Estágio em Desenvolvimento Web</Text>
            <Text style={styles.cardText}>
              Empresa parceira busca estudantes com conhecimentos em React e Node.js.
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Programa Jovem Talento</Text>
            <Text style={styles.cardText}>
              Capacitação profissional com foco em inovação e liderança empresarial.
            </Text>
          </View>
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Ver Vagas</Text>
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
  sectionTitle: { fontSize: 22, fontWeight: '700', color: '#0A5275', marginTop: 24, marginBottom: 8 },
  paragraph: { fontSize: 16, color: '#2f3640', lineHeight: 24, textAlign: 'justify' },
  cardsContainer: { marginTop: 10 },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 16, marginVertical: 8, elevation: 3 },
  cardTitle: { fontSize: 18, fontWeight: '600', color: '#0A5275', marginBottom: 6 },
  cardText: { fontSize: 15, color: '#555' },
  button: { backgroundColor: '#0078D7', paddingVertical: 14, borderRadius: 10, alignItems: 'center', marginTop: 25 },
  buttonText: { color: '#fff', fontSize: 17, fontWeight: '600' },
  backButton: { marginTop: 20, alignSelf: 'center' },
  backText: { color: '#0078D7', fontSize: 16, fontWeight: '500' },
});
