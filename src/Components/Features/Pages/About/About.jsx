
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Stack,
    Typography,
} from '@mui/material';
import AnimatedSection from '../../Components/AnimatedSection/AnimatedSection';
import './About.css';
import ceo from '../../../../assets/ceo2.jpg';

const About = () => {
    return (
        <Box className="about-page" sx={{ py: { xs: 4, md: 6 }, px: 2 }}>
            <Box className="about-container" sx={{ maxWidth: '80rem', mx: 'auto' }}>
                <AnimatedSection>
                    <Typography variant="h2" className="about-title" sx={{ color: '#fff', mb: 4, textAlign: 'center' }}>
                        À Propos de Moi
                    </Typography>
                </AnimatedSection>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} className="about-content" sx={{ alignItems: 'flex-start' }}>
                    <AnimatedSection delay="100ms" className="about-image-section" style={{ width: '100%', maxWidth: 420 }}>
                        <Card sx={{ overflow: 'hidden', background: 'transparent', border: '1px solid rgba(148,163,184,0.14)', boxShadow: 'none' }}>
                            <CardMedia component="img" image={ceo} alt="Loic BATO" className="about-image" sx={{ width: '100%', height: { xs: 350, md: 420 }, objectFit: 'cover' }} />
                        </Card>
                    </AnimatedSection>

                    <Box className="about-text" sx={{ flex: 1 }}>
                        <AnimatedSection delay="200ms">
                            <Typography variant="h4" className="about-heading" sx={{ color: '#fff', mb: 2 }}>
                                Un profil hybride au service de la donnée et de l’innovation
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                                Data Analyst, développeur web et Data Scientist, rigoureux et méthodique, je combine une formation en mathématiques, un Master en Intelligence Artificielle & Big Data et une expérience terrain en collecte, contrôle et exploitation de données statistiques à grande échelle. Mon approche couvre l’ensemble du cycle de vie de la donnée, du recueil brut jusqu’à l’entraînement de modèles intelligents.
                            </Typography>
                        </AnimatedSection>

                        <AnimatedSection delay="300ms">
                            <Typography variant="h5" className="about-subheading" sx={{ color: '#fff', mt: 4, mb: 1.5 }}>
                                Mon parcours
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                                J’ai commencé par la logique mathématique et l’informatique appliquée, puis j’ai progressivement développé une expertise forte en développement web et en analyse de données. Cette double trajectoire m’a permis d’acquérir une vision complète des enjeux techniques, métiers et décisionnels liés à la donnée. Aujourd’hui, je conçois des solutions qui associent qualité du code, fiabilité des données et performance des modèles.
                            </Typography>
                        </AnimatedSection>

                        <AnimatedSection delay="400ms">
                            <Typography variant="h5" className="about-subheading" sx={{ color: '#fff', mt: 4, mb: 1.5 }}>
                                Mon rôle d’entrepreneur et de data builder
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                                En tant que CEO de BAT LAB et de LMS Empire, je suis impliqué dans la vision produit, la stratégie de croissance et la mise en œuvre de solutions utiles sur le terrain. Cette expérience me donne une perspective globale du cycle de vie d’un produit : conception, exécution, optimisation, valeur pour les utilisateurs et impact pour les entreprises.
                            </Typography>
                        </AnimatedSection>

                        <AnimatedSection delay="500ms" className="about-cta">
                            <Card sx={{ mt: 4, background: 'rgba(11, 19, 43, 0.9)', border: '1px solid rgba(148,163,184,0.16)', borderRadius: 4, overflow: 'hidden' }}>
                                <CardContent sx={{ p: 3, pb: '20px !important' }}>
                                    <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={2} alignItems={{ xs: 'flex-start', sm: 'center' }} sx={{ mb: 2 }}>
                                        <Box>
                                            {/* <Typography variant="overline" sx={{ color: '#6fc69c', fontWeight: 800, letterSpacing: '0.12em', display: 'block', fontSize: '0.72rem' }}>CV</Typography> */}
                                            <Typography variant="h4" sx={{ color: '#fff', fontWeight: 700, fontSize: { xs: '1.8rem', sm: '2rem' } }}>Mon curriculum vitae</Typography>
                                        </Box>
                                        <Button
                                            component="a"
                                            href="/cv.html"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            variant="contained"
                                            sx={{
                                                background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))',
                                                color: '#fff',
                                                fontWeight: 700,
                                                px: 3,
                                                py: 0.5,
                                                borderRadius: 2,
                                                boxShadow: '0 14px 22px rgba(0, 130, 84, 0.22)',
                                                textTransform: 'none',
                                            }}
                                        >
                                            Prévisualiser
                                        </Button>
                                    </Stack>

                                    <Box sx={{ p: 2.5, borderRadius: 2, background: 'rgba(2, 6, 23, 0.48)', border: '1px solid rgba(148, 163, 184, 0.12)' }}>
                                        <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, mb: 0.75 }}>
                                            Tarekpessou Loïc BATO
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#6fc69c', mb: 1.5 }}>
                                            Data Analyst - Développeur Web - ML - Data Scientist
                                        </Typography>
                                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} useFlexGap sx={{ color: 'text.secondary', fontSize: '0.78rem', flexWrap: 'wrap', mb: 1.5 }}>
                                            <span>Lomé - Togo</span>
                                            <span>+228 90 45 78 86 / 96 70 15 72</span>
                                            <span>loicbato4@gmail.com</span>
                                        </Stack>
                                        <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
                                            {['Profil', 'Expériences', 'Formation', 'Compétences'].map((item) => (
                                                <Box key={item} sx={{ px: 1.7, py: 0.7, borderRadius: 999, background: 'rgba(148,163,184,0.1)', border: '1px solid rgba(148, 163, 184, 0.12)', color: '#e6f4ed', fontSize: '0.72rem' }}>
                                                    {item}
                                                </Box>
                                            ))}
                                        </Stack>
                                    </Box>
                                </CardContent>
                            </Card>
                        </AnimatedSection>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
};

export default About;
