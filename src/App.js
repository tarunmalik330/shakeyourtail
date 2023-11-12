
import './App.css';
import { useEffect } from 'react';
import AboutUs from './components/AboutUs';
import CustomerExperience from './components/CustomerExperience';
import HowItWork from './components/HowItWork';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import MainFeatures from './components/MainFeatures';
import Pricingplan from './components/Pricingplan';
import Testimonial from './components/Testimonial';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200
      }
    );
    Aos.refresh()
  });
  return (
    <div>
      <Header />
      <MainFeatures />
      <CustomerExperience />
      <HowItWork />
      <Pricingplan />
      <AboutUs />
      <Testimonial />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
