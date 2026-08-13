// Base de Datos de Proyectos (info quemada) //

export const projects = [
  {
    id: '1',
    title: 'App de Finanzas Personales',
    shortDescription: 'Control de gastos con gráficos.',
    fullDescription: 'Aplicación desarrollada con React Native que permite registrar ingresos y gastos, categorizarlos y visualizar el balance mensual.',
    image: require('../../assets/images/proyecto1.jpeg'),
    tech: ['React Native', 'Expo', 'Firebase'],
    role: 'Desarrollador Frontend',
    duration: '3 semanas',
  },
  {
    id: '2',
    title: 'Clínica Salud CR',
    shortDescription: 'Sistema de citas médicas.',
    fullDescription: 'Backend construido con Spring Boot y Spring Security, con manejo de usuarios, autenticación JWT y panel administrativo.',
    image: require('../../assets/images/proyecto2.jpeg'),
    tech: ['Spring Boot', 'MySQL', 'JWT'],
    role: 'Backend + Auth',
    duration: '6 semanas',
  },

  {
  id: '3',
  title: 'EcoWash',
  shortDescription: 'Plataforma web para servicios de limpieza de tapicería.',
  fullDescription: 'Aplicación web desarrollada en equipo para gestionar servicios de limpieza de tapicería (sofás, sillas, alfombras). Participé en el levantamiento de requerimientos funcionales y no funcionales, y en la documentación de historias de usuario en Jira para uno de los módulos del sistema.',
   image: require('../../assets/images/proyecto3.jpeg'),
  tech: ['JavaScript', 'HTML', 'CSS'],
  role: 'Análisis de requerimientos y documentación',
  duration: 'En curso',
},
];
