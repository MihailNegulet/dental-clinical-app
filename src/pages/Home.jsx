import React from 'react';
import HeroSection from '../components/herosection/HeroSection';
import Despre from '../components/despre-noi/Despre';
import FormProgramare from '../components/formProgramare/FormProgramare';
import OurTeam from '../components/ourTeam/OurTeam';
import Services from '../components/servicii/Services';
import BeforeAfterTabs from '../components/beforeAndAfter/BeforeAfterTabs';
import LocationCards from '../components/locationCards/LocationCards';
import TargetSection from '../components/TargetSection';

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
    </div>
  );
};

export default Home;