// src/components/ProjectCard.js
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

export default function ProjectCard({ project, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Image source={project.image} style={styles.image} resizeMode= 'contain' />
      <View style={styles.info}>
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.desc} numberOfLines={2}>{project.shortDescription}</Text>
        <View style={styles.tagRow}>
          {project.tech.slice(0, 2).map((t) => (
            <View key={t} style={styles.tag}>
              <Text style={styles.tagText}>{t}</Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#F5F5F5', borderRadius: 16, marginBottom: 16, overflow: 'hidden', elevation: 3, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 6, shadowOffset: { width: 0, height: 2 } },
  image: { width: '100%', height: 150 , resizeMode: 'contain'},
  info: { padding: 14 },
  title: { fontSize: 17, fontWeight: '700', marginBottom: 4, color: '#1A1A1A' },
  desc: { fontSize: 13, marginBottom: 10, color: '#666666' },
  tagRow: { flexDirection: 'row', gap: 6 },
  tag: { backgroundColor: '#6C5CE7', paddingVertical: 4, paddingHorizontal: 10, borderRadius: 20 },
  tagText: { color: '#fff', fontSize: 11, fontWeight: '600' },
});
// Aca hay separación de responsabilidades, el componente ProjectCard se encarga
// de mostrar la información del proyecto, mientras que la pantalla ProjectsScreen 
// se encarga de manejar la navegación y pasar los datos del proyecto al componente.