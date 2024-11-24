import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SplashScreen } from '../components/SplashScreen';
import { PortfolioView } from '../components/PortfolioView';

export default function Home() {
  const [showPortfolio, setShowPortfolio] = useState(false);
  
  return (
    <AnimatePresence mode="wait">
      {!showPortfolio ? (
        <SplashScreen onEnter={() => setShowPortfolio(true)} key="splash" />
      ) : (
        <PortfolioView onBack={() => setShowPortfolio(false)} key="portfolio" />
      )}
    </AnimatePresence>
  );
}