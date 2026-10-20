
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import './Footer.css';

const Footer = () => {
  return (
    <Box component="footer" className="footer" sx={{ borderTop: '1px solid rgba(148,163,184,0.16)', py: 3 }}>
      <Box className="footer-container" sx={{ maxWidth: '80rem', mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Stack className="footer-content" direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
          <Box className="footer-info">
            <Typography variant="h6" className="footer-title" sx={{ fontWeight: 700, m: 0 }}>
              Tarekpessou Loïc BATO
            </Typography>
            <Typography variant="body2" className="footer-subtitle" sx={{ color: 'text.secondary', m: 0 }}>
              Data Analyst - Développeur Web - ML - Data Scientist
            </Typography>
          </Box>

          <Stack className="footer-social" direction="row" spacing={1}>
            <IconButton
              component="a"
              href="https://github.com/loicBato/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              sx={{ border: '1px solid rgba(148,163,184,0.2)', color: '#fff' }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/tarekpessou-lo%C3%AFc-bato-980881229/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              sx={{ border: '1px solid rgba(148,163,184,0.2)', color: '#fff' }}
            >
              <LinkedIn />
            </IconButton>
          </Stack>

          <Box className="footer-links">
            <Typography variant="body2" className="footer-copyright" sx={{ color: 'text.secondary', m: 0 }}>
              &copy; 2026 BAT LAB. Tous droits réservés.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;