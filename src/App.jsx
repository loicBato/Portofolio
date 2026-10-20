
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import Header from './Components/Features/Components/Header/Header';
import Home from './Components/Features/Pages/Home/Home';
import About from './Components/Features/Pages/About/About';
import Skills from './Components/Features/Pages/Skills/Skills';
import Projects from './Components/Features/Pages/Projects/Projects';
import ProjectDetail from './Components/Features/Pages/ProjectDetail/ProjectDetail';
import Companies from './Components/Features/Pages/Companies/Companies';
import Contact from './Components/Features/Pages/Contacts/Contacts';
import Footer from './Components/Features/Components/Footer/Footer';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#008254',
      light: '#edf9f3',
      dark: '#00744a',
    },
    background: {
      default: '#0b132b',
      paper: '#111827',
    },
    text: {
      primary: '#f8fafc',
      secondary: '#cbd5e1',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '2.2rem',
      letterSpacing: '-0.03em',
      lineHeight: 1.1,
    },
    h2: {
      fontWeight: 800,
      fontSize: '1.8rem',
      lineHeight: 1.15,
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.4rem',
      lineHeight: 1.2,
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.15rem',
      lineHeight: 1.3,
    },
    h5: {
      fontWeight: 700,
      fontSize: '1.05rem',
      lineHeight: 1.3,
    },
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          fontWeight: 700,
        },
      },
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <div className="app-container">
          <Header />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
