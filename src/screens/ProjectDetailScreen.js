import { Image, StyleSheet, Text, View } from 'react-native';

export default function ProjectDetailScreen({ route }) {
  const { project } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: project.image }} style={styles.image} />
      <Text style={styles.title}>{project.title}</Text>
      <Text style={styles.body}>{project.fullDescription}</Text>
      <Text style={styles.techLabel}>Tecnologías:</Text>
      <Text style={styles.tech}>{project.tech.join(', ')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  image: { width: '100%', height: 200, borderRadius: 10, marginBottom: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  body: { fontSize: 15, lineHeight: 22, color: '#333' },
  techLabel: { marginTop: 16, fontWeight: '600' },
  tech: { color: '#666' },
});