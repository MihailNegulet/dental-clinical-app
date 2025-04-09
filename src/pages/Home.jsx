import React from 'react';
import HeroSection from '../components/herosection/HeroSection';
import Despre from '../components/despre-noi/Despre';
import OurTeam from '../components/ourTeam/OurTeam';
import Services from '../components/servicii/Services';
import BeforeAfterTabs from '../components/beforeAndAfter/BeforeAfterTabs';
import LocationCards from '../components/locationCards/LocationCards';
import TargetSection from '../components/TargetSection';
import ReviewPacienti from '../components/reviewPacienti/ReviewPacienti';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Despre />
      <Services />
      <TargetSection sectionId="ourTeam" >
        <OurTeam />
      </TargetSection>
      <BeforeAfterTabs />
      <LocationCards />  
      <ReviewPacienti />
    </div>
  );
};

export default Home;