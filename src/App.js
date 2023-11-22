
import './App.css';
import { Animation } from './components/Animation/Animation';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/HomePage/Home';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useEffect, useState } from 'react';

function App() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    
    const handleScroll = () => {
      if (window.scrollY > 200) {
       
          setIsVisible(true);
       
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="App">
      <div style={{ position: "relative" }}>
        <button
          className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
          onClick={scrollToTop}
        >
          <ExpandLessIcon  />
        </button>
      </div>
      <Home />
      <Animation />
      <Footer />
      <div className='language-btn'>
      <img src="https://ntwist.com/wp-content/plugins/gtranslate/flags/svg/en.svg" alt="flag" />
      <h3>EN </h3><ExpandLessIcon color='rgb(249, 249, 249)' />  
      </div>
    </div>
  );
  
}

export default App;
