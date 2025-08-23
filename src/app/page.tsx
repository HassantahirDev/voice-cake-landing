import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Features from '@/components/Features';
import AudioPlayer from '@/components/AudioPlayer';
import Comparison from '@/components/Comparison';
import Pricing from '@/components/Pricing';
import Resources from '@/components/Resources';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      <Hero />
      <Benefits />
      <Features />
      <AudioPlayer />
      <Comparison />
      <Pricing />
      <Resources />
      <Contact />
      <Footer />
    </main>
  );
}
