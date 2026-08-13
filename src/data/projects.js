// Base de Datos de Proyectos (info quemada) //

export const projects = [
  {
    id: '1',
    title: 'App de Finanzas Personales',
    shortDescription: 'Control de gastos con gráficos.',
    fullDescription: 'Aplicación desarrollada con React Native que permite registrar ingresos y gastos, categorizarlos y visualizar el balance mensual.',
    image: require('../../assets/images/proyecto1.jpg'),
    tech: ['React Native', 'Expo', 'Firebase'],
    role: 'Desarrollador Frontend',
    duration: '3 semanas',
  },
  {
    id: '2',
    title: 'Clínica Salud CR',
    shortDescription: 'Sistema de citas médicas.',
    fullDescription: 'Backend construido con Spring Boot y Spring Security, con manejo de usuarios, autenticación JWT y panel administrativo.',
    image: require('../../assets/images/proyecto2.jpg'),
    tech: ['Spring Boot', 'MySQL', 'JWT'],
    role: 'Backend + Auth',
    duration: '6 semanas',
  },
];
