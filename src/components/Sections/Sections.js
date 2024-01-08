import About from './About.astro'
import Experience from './Experience.astro'
import Projects from './Projects.astro'
import Technologies from './Skills.astro'
import Education from './Education.astro'

export const SECTIONS = [
  {
    name: 'Acerca de',
    component: About,
  },
  {
    id: 'experience',
    name: 'Experiencia',
    component: Experience,
  },
  {
    id: 'project',
    name: 'Proyectos',
    component: Projects,
  },
  {
    id: 'Technologies',
    name: 'Tecnologías',
    component: Technologies,
  },
  {
    id: 'education',
    name: 'Educación',
    component: Education,
  },
]
