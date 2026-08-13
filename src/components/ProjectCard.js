import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProjectCard({ project, onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: project.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.desc}>{project.shortDescription}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', marginBottom: 12, backgroundColor: '#fff', borderRadius: 10, overflow: 'hidden', elevation: 2 },
  image: { width: 90, height: 90 },
  info: { flex: 1, padding: 10, justifyContent: 'center' },
  title: { fontSize: 16, fontWeight: '600' },
  desc: { fontSize: 13, color: '#666' },
});

// Aca hay separación de responsabilidades, el componente ProjectCard se encarga
// de mostrar la información del proyecto, mientras que la pantalla ProjectsScreen 
// se encarga de manejar la navegación y pasar los datos del proyecto al componente.