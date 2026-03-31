import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutFounder } from './components/AboutFounder';
import { Services } from './components/Services';
import { VideoSection } from './components/VideoSection';
import { SocialPresence } from './components/SocialPresence';
import { Testimonials } from './components/Testimonials';
import { Team } from './components/Team';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { MapSection } from './components/MapSection';
import { Footer } from './components/Footer';
import { FloatingSocials } from './components/FloatingSocials';
import { CaseStudies } from './components/CaseStudies';
import { CaseStudyPage } from './components/CaseStudyPage';

export default function App() {
  return (
    <Router basename="/">
      <div className="min-h-screen bg-[#f8f9fb] text-slate-900 font-sans selection:bg-slate-200 selection:text-slate-900 relative">

        {/* Background */}
        <div className="fixed inset-0 bg-grid-pattern opacity-50 pointer-events-none z-0"></div>

        <div className="relative z-10">
          
          {/* Navbar */}
          <Navbar />

          <Routes>

            {/* ================= HOME PAGE ================= */}
            <Route
              path="/"
              element={
                <main className="flex flex-col gap-8 md:gap-10 pb-14">
                  <Hero />
                  <AboutFounder />
                  <Services />
                  <CaseStudies />
                  <VideoSection />
                  <SocialPresence />
                  <Testimonials />
                  <Team />
                  <FAQ />
                  <Contact />
                  <MapSection />
                </main>
              }
            />

            {/* ================= CASE STUDY PAGE ================= */}
            <Route path="/case/:id" element={<CaseStudyPage />} />

          </Routes>

          {/* Footer */}
          <Footer />

          {/* Floating Icons */}
          <FloatingSocials />

        </div>
      </div>
    </Router>
  );
}