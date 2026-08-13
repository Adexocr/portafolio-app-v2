
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function ProjectDetailScreen({ route }) {
  const { project } = route.params;

  return (
    <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
      <Image source={{ uri: project.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{project.title}</Text>

        <View style={styles.metaRow}>
          <View>
            <Text style={styles.metaLabel}>Rol</Text>
            <Text style={styles.metaValue}>{project.role}</Text>
          </View>
          <View>
            <Text style={styles.metaLabel}>Duración</Text>
            <Text style={styles.metaValue}>{project.duration}</Text>
          </View>
        </View>

        <Text style={styles.body}>{project.fullDescription}</Text>

        <Text style={styles.techLabel}>Tecnologías</Text>
        <View style={styles.tagRow}>
          {project.tech.map((t) => (
            <View key={t} style={styles.tag}>
              <Text style={styles.tagText}>{t}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: { width: '100%', height: 220 },
  content: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, color: '#1A1A1A' },
  metaRow: { flexDirection: 'row', gap: 24, marginBottom: 16 },
  metaLabel: { fontSize: 12, color: '#666666' },
  metaValue: { fontSize: 15, fontWeight: '600', color: '#1A1A1A' },
  body: { fontSize: 15, lineHeight: 22, marginBottom: 20, color: '#666666' },
  techLabel: { fontSize: 16, fontWeight: '700', marginBottom: 10, color: '#1A1A1A' },
  tagRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  tag: { backgroundColor: '#6C5CE7', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 20 },
  tagText: { color: '#fff', fontSize: 12, fontWeight: '600' },
});