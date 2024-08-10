import './App.css';
import Background from './assets/components/Background';
import Navbar from './assets/components/Navbar';
import FeaturesandBenefits from './assets/components/FeaturesandBenefits';
import HowItWorks from './assets/components/HowItWorks'; // Ensure correct export style
import FAQ from './assets/components/FAQ';
import Contact from './assets/components/Contact';
import Footer from './assets/components/footer';

function App() {
  return (
    <div className="relative w-full overflow-hidden">
      <Navbar />
      <Background />
      <div className='relative bg-features-bg bg-cover bg-center py-16'>
      <FeaturesandBenefits />
      <HowItWorks />
      <FAQ />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
