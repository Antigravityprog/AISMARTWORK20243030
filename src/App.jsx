import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AIAssistantModal } from './components/AIAssistantModal';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { TechJournal } from './pages/TechJournal';
import { JournalDetail } from './pages/JournalDetail';
import { Experiments } from './pages/Experiments';
import { Contact } from './pages/Contact';

// Scroll to top helper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  const [assistantOpen, setAssistantOpen] = useState(false);

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar onOpenAssistant={() => setAssistantOpen(true)} />
          
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home onOpenAssistant={() => setAssistantOpen(true)} />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/journal" element={<TechJournal />} />
              <Route path="/journal/:id" element={<JournalDetail />} />
              <Route path="/experiments" element={<Experiments />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home onOpenAssistant={() => setAssistantOpen(true)} />} />
            </Routes>
          </main>

          <Footer />

          {/* AI Assistant Chat Modal */}
          <AIAssistantModal
            isOpen={assistantOpen}
            onClose={() => setAssistantOpen(false)}
          />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;

