
import './App.css';
import { useEffect, useState } from 'react';
import AboutUs from './components/AboutUs';
import CustomerExperience from './components/CustomerExperience';
import HowItWork from './components/HowItWork';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import MainFeatures from './components/MainFeatures';
import Pricingplan from './components/Pricingplan';
import Testimonial from './components/Testimonial';
import BackToTop from './assets/images/png/top.png';
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
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
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
      <div>
        <img onClick={() => top()} src={BackToTop} alt='BackToTop' className={backToTop ? "back_to_top" : "d-none"} />
      </div>
    </div>
  );
}

export default App;
