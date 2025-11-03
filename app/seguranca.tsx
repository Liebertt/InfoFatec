import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function SegurancaScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80' }}
          style={styles.bannerImage}
        />
        <View style={styles.overlay} />
        <Text style={styles.bannerTitle}>Segurança e Bem-Estar</Text>
        <Text style={styles.bannerSubtitle}>Ambiente Confiável, Ético e Saudável</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Nosso Compromisso</Text>
        <Text style={styles.paragraph}>
          A InfoFatec prioriza a segurança física e digital de todos os seus alunos e colaboradores. 
          Trabalhamos continuamente para garantir um ambiente acadêmico seguro, ético e inclusivo.
        </Text>

        <Text style={styles.sectionTitle}>Ações e Programas</Text>
        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Segurança Digital</Text>
            <Text style={styles.cardText}>
              Treinamentos sobre privacidade, proteção de dados e boas práticas de cibersegurança.
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Bem-Estar Acadêmico</Text>
            <Text style={styles.cardText}>
              Apoio psicológico, programas de saúde mental e ações de prevenção.
            </Text>
          </View>
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Conheça as Iniciativas</Text>
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
  sectionTitle: { fontSize: 22, fontWeight: '700', color: '#145A32', marginTop: 24, marginBottom: 8 },
  paragraph: { fontSize: 16, color: '#2f3640', lineHeight: 24, textAlign: 'justify' },
  cardsContainer: { marginTop: 10 },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 16, marginVertical: 8, elevation: 3 },
  cardTitle: { fontSize: 18, fontWeight: '600', color: '#145A32', marginBottom: 6 },
  cardText: { fontSize: 15, color: '#555' },
  button: { backgroundColor: '#27AE60', paddingVertical: 14, borderRadius: 10, alignItems: 'center', marginTop: 25 },
  buttonText: { color: '#fff', fontSize: 17, fontWeight: '600' },
  backButton: { marginTop: 20, alignSelf: 'center' },
  backText: { color: '#27AE60', fontSize: 16, fontWeight: '500' },
});
