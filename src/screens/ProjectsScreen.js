import { FlatList } from 'react-native';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function ProjectsScreen({ navigation }) {
    return (
        <FlatList
            data={projects}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ padding: 16 }}
            renderItem={({ item }) => (

             <ProjectCard project={item}
             onPress={() => navigation.navigate('ProjectDetail', { project: item })}
            
            />
           )}
        />
    );
}


