
import { FlatList } from 'react-native';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsScreen({ navigation }) {
  return (
    <FlatList
      data={projects}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16, backgroundColor: '#FFFFFF' }}
      renderItem={({ item }) => (
        <ProjectCard
          project={item}
          onPress={() => navigation.navigate('ProjectDetail', { project: item })}
        />
      )}
    />
  );
}
