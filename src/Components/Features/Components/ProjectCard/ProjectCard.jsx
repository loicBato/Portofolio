
import { Box, Card, CardContent, CardMedia, Chip, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <Card
      component={Link}
      to={`/projects/${project.slug}`}
      className="project-card"
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        background: 'rgba(15, 23, 42, 0.8)',
        border: '1px solid rgba(148, 163, 184, 0.15)',
        borderRadius: 3,
        overflow: 'hidden',
        color: 'inherit',
        transition: 'transform 0.2s ease, border-color 0.2s ease',
        '&:hover': { transform: 'translateY(-4px)', borderColor: 'rgba(0, 130, 84, 0.5)' },
      }}
    >
      <CardMedia component="img" image={project.imageUrl} alt={project.title} sx={{ height: 220, objectFit: 'cover' }} />
      <CardContent sx={{ flexGrow: 1, p: 2.5, pb: '16px !important' }}>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 1.5 }}>
          {project.tags.slice(0, 3).map((tag) => (
            <Chip key={tag} label={tag} size="small" sx={{ background: 'rgba(148,163,184,0.12)', color: '#e6f4ed', fontWeight: 600 }} />
          ))}
        </Stack>
        <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>{project.title}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>{project.subtitle}</Typography>
        <Box sx={{ color: '#6fc69c', fontWeight: 700 }}>Voir plus →</Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
