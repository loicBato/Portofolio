
import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Email, LinkedIn, Send } from '@mui/icons-material';
import './Contacts.css';
import AnimatedSection from '../../Components/AnimatedSection/AnimatedSection';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setFeedback('Veuillez remplir tous les champs.');
      return;
    }

    const subject = encodeURIComponent(`Demande de contact de ${name}`);
    const body = encodeURIComponent(
      `Bonjour Mr BATO,\n\nJe suis ${name} (${email}).\n\n${message}\n\nCordialement.`
    );

    const mailtoLink = `mailto:loicbato4@gmail.com?subject=${subject}&body=${body}`;
    setFeedback('Ouverture de votre client e-mail...');
    window.location.href = mailtoLink;

    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setFeedback(''), 3000);
  };

  return (
    <Box className="contact-page" sx={{ py: { xs: 4, md: 6 }, px: 2 }}>
      <Box className="contact-container" sx={{ maxWidth: '80rem', mx: 'auto' }}>
        <AnimatedSection>
          <Typography variant="h2" sx={{ color: '#fff', textAlign: 'center', mb: 2 }}>
            Contactez-moi
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center', maxWidth: 800, mx: 'auto', lineHeight: 1.8 }}>
            Une idée de projet, une collaboration ou un besoin de conseil ? Je suis ouvert aux discussions autour du digital, des produits et de la donnée.
          </Typography>
        </AnimatedSection>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} className="contact-content" sx={{ mt: 5 }}>
          <AnimatedSection delay="100ms" style={{ flex: 1 }}>
            <Card sx={{ p: 1, background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(148,163,184,0.14)', borderRadius: 3 }}>
              <CardContent sx={{ p: 3 }}>
                <Box component="form" onSubmit={handleSubmit} className="contact-form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <TextField
                    label="Nom complet"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    fullWidth
                    placeholder="Prénom Nom"
                    sx={{ '& .MuiOutlinedInput-root': { background: 'rgba(15,23,42,0.5)', color: '#fff' } }}
                  />
                  <TextField
                    label="Adresse e-mail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    fullWidth
                    placeholder="vous@exemple.com"
                    sx={{ '& .MuiOutlinedInput-root': { background: 'rgba(15,23,42,0.5)', color: '#fff' } }}
                  />
                  <TextField
                    label="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    fullWidth
                    multiline
                    minRows={5}
                    placeholder="Votre message..."
                    sx={{ '& .MuiOutlinedInput-root': { background: 'rgba(15,23,42,0.5)', color: '#fff' } }}
                  />
                  <Button type="submit" variant="contained" color="primary" endIcon={<Send />} sx={{ alignSelf: 'flex-start' }}>
                    Envoyer par e-mail
                  </Button>
                  {feedback && <Typography variant="body2" sx={{ color: '#6fc69c' }}>{feedback}</Typography>}
                </Box>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay="200ms" style={{ flex: 1 }}>
            <Card sx={{ height: '100%', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(148,163,184,0.14)', borderRadius: 3 }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" sx={{ color: '#fff', mb: 1.5 }}>
                  Autres moyens de contact
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
                  Je suis également disponible par e-mail et via LinkedIn pour les opportunités professionnelles et les collaborations.
                </Typography>

                <Stack spacing={2}>
                  <Box component="a" href="mailto:loicbato4@gmail.com" sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, borderRadius: 2, textDecoration: 'none', background: 'rgba(2, 6, 23, 0.4)', border: '1px solid rgba(148,163,184,0.12)' }}>
                    <IconButton sx={{ bgcolor: 'rgba(0,130,84,0.1)', color: '#6fc69c' }} disableRipple>
                      <Email />
                    </IconButton>
                    <Box>
                      <Typography variant="subtitle2" sx={{ color: '#fff' }}>E-mail</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>loicbato4@gmail.com</Typography>
                    </Box>
                  </Box>

                  <Box component="a" href="https://www.linkedin.com/in/tarekpessou-lo%C3%AFc-bato-980881229/" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, borderRadius: 2, textDecoration: 'none', background: 'rgba(2, 6, 23, 0.4)', border: '1px solid rgba(148,163,184,0.12)' }}>
                    <IconButton sx={{ bgcolor: 'rgba(0,130,84,0.1)', color: '#6fc69c' }} disableRipple>
                      <LinkedIn />
                    </IconButton>
                    <Box>
                      <Typography variant="subtitle2" sx={{ color: '#fff' }}>LinkedIn</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>tarekpessou-loïc-bato</Typography>
                    </Box>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </AnimatedSection>
        </Stack>
      </Box>
    </Box>
  );
};

export default Contact;
