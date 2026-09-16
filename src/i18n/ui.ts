import en from '@data/en.json';
import es from '@data/es.json';

const meta = {
  en: {
    'meta.name': 'Yordi Castro',
    'meta.title': 'Yordi Castro | Full Stack Developer Portfolio',
    'meta.description':
      'Full Stack Developer Portfolio by Yordi Castro. Explore experience, projects, certifications, and skills in a single page.',
    'meta.locale': 'en_US',
  },
  es: {
    'meta.name': 'Yordi Castro',
    'meta.title': 'Yordi Castro | Portafolio de Desarrollador Full Stack',
    'meta.description':
      'Portafolio de Desarrollador Full Stack de Yordi Castro. Explorá experiencia, proyectos, certificaciones y habilidades en una sola página.',
    'meta.locale': 'es_ES',
  },
} as const;

const sections = {
  en: {
    'hero.imageAlt':
      'Black and white portrait of Yordi Castro Rojas posing in a dark overcoat against a wall with geometric shadows from natural light.',
    'hero.portfolio.aria': "View {{name}}'s portfolio",
    'hero.email.aria': 'Send an email to {{name}}',
    'hero.network.aria': "View {{name}}'s {{network}} profile",
    'hero.resume.aria': "Download {{name}}'s resume in PDF",
    'aboutMe.title': 'About me',
    'experience.title': 'Experience',
    'projects.title': 'Projects',
    'projects.demo.aria': 'View {{name}} live demo in a new tab',
    'projects.repo.aria': 'View {{name}} repository on GitHub in a new tab',
    'education.title': 'Education',
    'certificates.title': 'Certificates',
    'certificates.certificate.aria': 'View {{name}} certificate issued by {{issuer}}',
    'skills.title': 'Skills',
  },
  es: {
    'hero.imageAlt':
      'Retrato en blanco y negro de Yordi Castro Rojas posando con un abrigo oscuro frente a una pared con sombras geométricas de luz natural.',
    'hero.portfolio.aria': 'Ver el portafolio de {{name}}',
    'hero.email.aria': 'Enviar un correo electrónico a {{name}}',
    'hero.network.aria': 'Ver el perfil de {{name}} en {{network}}',
    'hero.resume.aria': 'Descargar el currículum de {{name}} en PDF',
    'aboutMe.title': 'Sobre mí',
    'experience.title': 'Experiencia',
    'projects.title': 'Proyectos',
    'projects.demo.aria': 'Ver demo en vivo del proyecto {{name}} en una nueva pestaña',
    'projects.repo.aria': 'Ver repositorio de {{name}} en GitHub en una nueva pestaña',
    'education.title': 'Educación',
    'certificates.title': 'Certificados',
    'certificates.certificate.aria': 'Ver el certificado de {{name}} emitido por {{issuer}}',
    'skills.title': 'Habilidades',
  },
} as const;

const labels = {
  en: {
    'labels.present': 'Present',
  },
  es: {
    'labels.present': 'Actualidad',
  },
} as const;

const home = {
  en: {
    'home.meta.title': 'Yordi Castro Rojas | Full Stack Developer Portfolio',
    'home.meta.description': 'Full Stack Developer Portfolio by Yordi Castro Rojas',
  },
  es: {
    'home.meta.title': 'Yordi Castro Rojas | Portafolio de Desarrollador Full Stack',
    'home.meta.description': 'Portafolio de Desarrollador Full Stack de Yordi Castro Rojas',
  },
} as const;

const notFound = {
  en: {
    'notFound.title': '404 — Not Found',
    'notFound.description': 'The page you are looking for does not exist.',
    'notFound.back': 'Go back',
    'notFound.meta.title': '404 — Page Not Found | Yordi Castro',
    'notFound.meta.description':
      "The page you're looking for doesn't exist. Return home to see experience, projects, and certifications.",
  },
  es: {
    'notFound.title': '404 — No Encontrado',
    'notFound.description': 'La página que estás buscando no existe.',
    'notFound.back': 'Volver',
    'notFound.meta.title': '404 — Página No Encontrada | Yordi Castro',
    'notFound.meta.description':
      'La página que buscas no existe. Vuelve al inicio para ver experiencia, proyectos y certificaciones.',
  },
} as const;

export const ui = {
  en: {
    ...meta.en,
    ...sections.en,
    ...labels.en,
    ...home.en,
    ...notFound.en,
  },
  es: {
    ...meta.es,
    ...sections.es,
    ...labels.es,
    ...home.es,
    ...notFound.es,
  },
} as const;

export const content = { en, es } as const;
