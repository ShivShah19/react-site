import './App.css'
import EventSection from './components/EventsSection/EventSection.jsx';
import Header from './components/Header/Header.jsx';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import AchievementSection from './components/AchievementSection/AchievementSection.jsx';
import FAQSection from './components/FAQSection/FAQ.jsx';
import Subscribe from './components/SubscribeSection/Subscribe.jsx';
import Footer from './components/FooterSection/Footer.jsx';


function App() {
  return (
    <div className="container">
      <Header />
      <HeroSection />
      <EventSection />
      <AchievementSection />
      <FAQSection />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App


// Developed by shiv sunder
// https://github.com/ShivShah19/
