import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import './CompanyCard.css';

const CompanyCard = ({ company }) => {
    return (
        <Card
            className="company-card"
            sx={{
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(148, 163, 184, 0.15)',
                borderRadius: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                p: 0,
            }}
        >
            <Box className="logo-container" sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                {company.logo ? (
                    <CardMedia component="img" image={company.logo} alt={`${company.name} logo`} className="company-logo" sx={{ width: 110, height: 110, objectFit: 'contain', borderRadius: 2 }} />
                ) : (
                    <Box className="company-logo-placeholder" sx={{ width: 110, height: 110, borderRadius: 2, background: 'rgba(148,163,184,0.12)' }} />
                )}
            </Box>
            <CardContent sx={{ flexGrow: 1, px: 2.5, pb: 2.5 }}>
                <Typography variant="h6" className="company-name" sx={{ color: '#fff', mb: 1.5 }}>{company.name}</Typography>
                <Typography variant="body2" className="company-mission" sx={{ color: '#6fc69c', mb: 1.5, fontWeight: 600 }}>{company.mission}</Typography>
                <Typography variant="body2" className="company-description" sx={{ color: 'text.secondary', mb: 2 }}>{company.description}</Typography>
                <Button
                    component="a"
                    href={company.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company-link"
                    variant="text"
                    sx={{ p: 0, color: '#6fc69c', fontWeight: 700 }}
                >
                    Visiter le site →
                </Button>
            </CardContent>
        </Card>
    );
};

export default CompanyCard;