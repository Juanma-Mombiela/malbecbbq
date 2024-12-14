import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import CateringEvents from '@/components/CateringEvents';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <CateringEvents />
      <ContactForm />
      <Footer />
    </div>
  );
}