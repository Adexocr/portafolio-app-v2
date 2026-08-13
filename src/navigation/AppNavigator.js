import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import ProjectDetailScreen from '../screens/ProjectDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ProjectsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProjectsList" component={ProjectsScreen} options={{ title: 'Proyectos' }} />
      <Stack.Screen name="ProjectDetail" component={ProjectDetailScreen} options={{ title: 'Detalle' }} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#6C5CE7' }}>
        <Tab.Screen
          name="Inicio"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Proyectos"
          component={ProjectsStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'briefcase' : 'briefcase-outline'} size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
