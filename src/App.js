import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';

export default function App() {
  return (
    <>
    <div>
      <NavBar />
      <Home />
      <About />


      <SocialLinks />
    </div>
    </>
  )
}
