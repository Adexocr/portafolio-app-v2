// src/screens/HomeScreen.js
import { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const skills = ['React Native', 'Spring Boot', 'Terraform', 'Docker', 'MySQL'];

export default function HomeScreen({ navigation }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = isDarkMode
    ? { background: '#121212', card: '#1E1E1E', text: '#FFFFFF', subtitle: '#AAAAAA', gradient: ['#2C2C54', '#40407A'], accent: '#A29BFE' }
    : { background: '#FFFFFF', card: '#F5F5F5', text: '#1A1A1A', subtitle: '#666666', gradient: ['#6C5CE7', '#A29BFE'], accent: '#6C5CE7' };

  return (
    <ScrollView style={{ backgroundColor: theme.background }}>
      <LinearGradient colors={theme.gradient} style={styles.header}>
        <Image source={require('../../assets/images/avatar.jpeg')} style={styles.avatar} />
        <Text style={styles.name}>Kevin Hidalgo</Text>
        <Text style={styles.subtitleOnGradient}>Desarrollador Móvil en formación</Text>
      </LinearGradient>

      <View style={styles.body}>
        <View style={[styles.switchRow, { backgroundColor: theme.card }]}>
          <Text style={{ color: theme.text }}>Modo oscuro</Text>
          <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
        </View>

        <Text style={[styles.sectionTitle, { color: theme.text }]}>Sobre mí</Text>
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={{ color: theme.subtitle, lineHeight: 20 }}>
            Estudiante de la carrera en TEC, enfocado en desarrollo móvil con React Native
            y backend con Spring Boot. Me interesa la nube y la automatización de infraestructura.
          </Text>
        </View>

        <Text style={[styles.sectionTitle, { color: theme.text }]}>Tecnologías</Text>
        <View style={styles.chipRow}>
          {skills.map((skill) => (
            <View key={skill} style={[styles.chip, { backgroundColor: theme.accent }]}>
              <Text style={styles.chipText}>{skill}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.accent }]}
          onPress={() => navigation.navigate('Proyectos')}
        >
          <Text style={styles.buttonText}>Ver mis proyectos</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: { paddingTop: 60, paddingBottom: 30, alignItems: 'center', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  avatar: { width: 110, height: 110, borderRadius: 55, borderWidth: 3, borderColor: '#fff', marginBottom: 12 },
  name: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  subtitleOnGradient: { fontSize: 14, color: '#EDEDED', marginTop: 4 },
  body: { padding: 20 },
  switchRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 14, borderRadius: 12, marginBottom: 24 },
  sectionTitle: { fontSize: 16, fontWeight: '700', marginBottom: 10 },
  card: { padding: 14, borderRadius: 12, marginBottom: 24 },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 24 },
  chip: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 20 },
  chipText: { color: '#fff', fontSize: 12, fontWeight: '600' },
  button: { padding: 14, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});