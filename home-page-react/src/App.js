import logo from './logo.svg';
import Features from './components/features';
import BasicInfo from './components/navbar';
import FluidExample from './components/caruosel';
import About from './components/about';
import BestFeatures from './components/bestfeatures'
import Subscribe from './components/subscribe'
import ContactUs from './components/contact'
import './App.css';

function App() {
  return (
    <div className='bg-container'>
      <BasicInfo/>
      <FluidExample />
      <Features />
      <About />
      <BestFeatures />
      <Subscribe />
      <ContactUs />
    </div>
    

  );
}
export default App;
