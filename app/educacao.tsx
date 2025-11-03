import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function EducacaoScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Banner */}
      <View style={styles.banner}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80' }}
          style={styles.bannerImage}
        />
        <View style={styles.overlay} />
        <Text style={styles.bannerTitle}>Educação e Conhecimento</Text>
        <Text style={styles.bannerSubtitle}>Excelência Acadêmica e Inovação</Text>
      </View>

      {/* Conteúdo principal */}
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Sobre a InfoFatec</Text>
        <Text style={styles.paragraph}>
          A InfoFatec é referência em educação tecnológica, oferecendo um ambiente que estimula o aprendizado prático,
          a pesquisa e a formação de profissionais preparados para os desafios do futuro. Nossa missão é transformar
          conhecimento em impacto social e inovação sustentável.
        </Text>

        <Text style={styles.sectionTitle}>Áreas de Ensino</Text>
        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Tecnologia da Informação</Text>
            <Text style={styles.cardText}>
              Cursos que formam especialistas em desenvolvimento de software, segurança e infraestrutura de TI.
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Gestão e Negócios</Text>
            <Text style={styles.cardText}>
              Programas que unem teoria e prática para desenvolver líderes preparados para o mercado global.
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Engenharia e Inovação</Text>
            <Text style={styles.cardText}>
              Disciplinas focadas em inovação, sustentabilidade e transformação tecnológica.
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Vida Acadêmica</Text>
        <Text style={styles.paragraph}>
          A comunidade acadêmica da InfoFatec promove eventos, grupos de pesquisa e intercâmbios internacionais.
          Nosso campus é um ecossistema de aprendizado contínuo e colaboração.
        </Text>

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
  container: {
    backgroundColor: '#f5f6fa',
    flex: 1,
  },
  banner: {
    position: 'relative',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  bannerTitle: {
    position: 'absolute',
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
  },
  bannerSubtitle: {
    position: 'absolute',
    bottom: 40,
    color: '#f0f0f0',
    fontSize: 16,
    textAlign: 'center',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0a3d62',
    marginTop: 24,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    color: '#2f3640',
    lineHeight: 24,
    textAlign: 'justify',
  },
  cardsContainer: {
    marginTop: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#273c75',
    marginBottom: 6,
  },
  cardText: {
    fontSize: 15,
    color: '#555',
  },
  button: {
    backgroundColor: '#0066cc',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  backButton: {
    marginTop: 20,
    alignSelf: 'center',
  },
  backText: {
    color: '#0066cc',
    fontSize: 16,
    fontWeight: '500',
  },
});
