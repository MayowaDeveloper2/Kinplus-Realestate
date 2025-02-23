import './globals.css';



import Hero from './landing page/Hero';
import Bodysection from './landing page/Bodysection';
import Navbar from './landing page/Navbar';
import Footer from './landing page/Footer';


export default function Home() {
  return (
    <main className="" >

      <Navbar />
      <Hero />
      <Bodysection />
      <Footer />
    </main>
  );
}