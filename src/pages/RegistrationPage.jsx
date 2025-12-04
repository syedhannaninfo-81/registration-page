import React from 'react';
import { Header } from '../components/Header';
import { EventDetails } from '../components/EventDetails';
import { WelcomeSection } from '../components/WelcomeSection';
import { FormContainer } from '../components/FormContainer';
import { Footer } from '../components/Footer';
import { BackgroundPattern } from '../components/BackgroundPattern';
import { SocialMedia } from '../components/SocialMedia';   // <-- ADDED

export const RegistrationPage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundPattern />

      <div className="relative z-10">
        <Header />
        <EventDetails />
        <WelcomeSection />
        <SocialMedia />   {/* <-- ADDED HERE */}
        <FormContainer />
        <Footer />
      </div>
    </div>
  );
};
