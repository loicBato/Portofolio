
import { Box, Typography } from '@mui/material';
import AnimatedSection from '../../Components/AnimatedSection/AnimatedSection';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import { projectsData } from '../../Data';
import './Projects.css';

const Projects = () => {
  return (
    <Box className="projects-page" sx={{ py: { xs: 4, md: 6 }, px: 2 }}>
      <Box className="projects-container" sx={{ maxWidth: '80rem', mx: 'auto' }}>
        <AnimatedSection>
          <Typography variant="h2" sx={{ color: '#fff', textAlign: 'center', mb: 2 }}>
            Mes Projets
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center', maxWidth: 900, mx: 'auto', lineHeight: 1.8 }}>
            Une sélection de réalisations qui reflètent ma maîtrise du développement web, de la data, de l’IA et des outils de décision. Chaque projet illustre une solution pensée pour résoudre un vrai besoin métier.
          </Typography>
        </AnimatedSection>

        <Box className="projects-grid" sx={{ mt: 5, display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 1fr))' } }}>
          {projectsData.map((project, index) => (
            <AnimatedSection key={project.slug} delay={`${index * 100}ms`}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
