import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WorkflowsShowcase from './components/WorkflowsShowcase';
import WhyUs from './components/WhyUs';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  const handleOpenContact = () => setContactOpen(true);
  const handleCloseContact = () => setContactOpen(false);

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 font-sans selection:bg-cyan-400 selection:text-black relative">
      <Navbar onOpenContact={handleOpenContact} />
      
      <main>
        <Hero onOpenContact={handleOpenContact} />
        <Services onOpenContact={handleOpenContact} />
        <Portfolio onOpenContact={handleOpenContact} />
        <WorkflowsShowcase onOpenContact={handleOpenContact} />
        <WhyUs onOpenContact={handleOpenContact} />
      </main>

      <Footer onOpenContact={handleOpenContact} />

      <ContactModal isOpen={contactOpen} onClose={handleCloseContact} />
    </div>
  );
}
