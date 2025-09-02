
import React from 'react';
import Hero from '../../sections/hero';
import Navbar from '../../sections/navbar';
import Overview from '../../sections/overview';
import BenefitsBlocs from '../../sections/benefitsBlocs';
import Testimonials from '../../sections/testimonials';
import Zpattern from '../../sections/zpattern';
import PureCTA from '../../sections/purecta';
import FAQ from '../../sections/faq';
import Footer from '../../sections/footer';
import './index.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
        <Navbar />
        <Hero />
        <Overview />
        <BenefitsBlocs />
        <Testimonials />
        <Zpattern />
        <PureCTA />
        <FAQ />
        <Footer />
    </div>
  );
};

export default Home;
