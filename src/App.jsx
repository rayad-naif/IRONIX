import React, { useState } from 'react';
import { RouterProvider, useRouter } from './router/useRouter';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import SolutionsPage from './pages/SolutionsPage';
import DetailedSetupPage from './pages/DetailedSetupPage';
import PricingPage from './pages/PricingPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import DeveloperDocsPage from './pages/DeveloperDocsPage';
import StatusPage from './pages/StatusPage';
import CareersPage from './pages/CareersPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import SecurityCompliancePage from './pages/SecurityCompliancePage';
import SlaGuaranteesPage from './pages/SlaGuaranteesPage';

function AppContent() {
  const { currentPath } = useRouter();
  const [contactOpen, setContactOpen] = useState(false);

  const handleOpenContact = () => setContactOpen(true);
  const handleCloseContact = () => setContactOpen(false);

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage onOpenContact={handleOpenContact} />;
      case '/services':
        return <ServicesPage onOpenContact={handleOpenContact} />;
      case '/products':
      case '/portfolio':
        return <ProductsPage onOpenContact={handleOpenContact} />;
      case '/solutions':
        return <SolutionsPage onOpenContact={handleOpenContact} />;
      case '/setup':
        return <DetailedSetupPage />;
      case '/pricing':
        return <PricingPage onOpenContact={handleOpenContact} />;
      case '/case-studies':
        return <CaseStudiesPage onOpenContact={handleOpenContact} />;
      case '/blog':
        return <BlogPage />;
      case '/about':
        return <AboutPage onOpenContact={handleOpenContact} />;
      case '/docs':
        return <DeveloperDocsPage />;
      case '/status':
        return <StatusPage />;
      case '/careers':
        return <CareersPage onOpenContact={handleOpenContact} />;
      case '/contact':
        return <ServicesPage onOpenContact={handleOpenContact} />;
      case '/privacy':
        return <PrivacyPolicyPage />;
      case '/terms':
        return <TermsOfServicePage />;
      case '/cookies':
        return <CookiePolicyPage />;
      case '/security':
        return <SecurityCompliancePage onOpenContact={handleOpenContact} />;
      case '/sla':
        return <SlaGuaranteesPage onOpenContact={handleOpenContact} />;
      default:
        return <HomePage onOpenContact={handleOpenContact} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 font-sans selection:bg-cyan-400 selection:text-black relative flex flex-col justify-between">
      <div>
        <Navbar onOpenContact={handleOpenContact} />
        <main>{renderPage()}</main>
      </div>

      <Footer onOpenContact={handleOpenContact} />

      <ContactModal isOpen={contactOpen} onClose={handleCloseContact} />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
