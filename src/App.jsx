import CallToAction from "./components/CallToAction";
import DestinationGrid from "./components/DestinationGrid";
import EmiBanner from "./components/EmiBanner";
import ExoticDestinations from "./components/ExoticDestinations";
import FeaturedPackages from "./components/FeaturedPackages";
import FixedDepartures from "./components/FixedDepartures";
import FloatingContact from "./components/FloatingContact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HoneymoonGroupTours from "./components/HoneymoonGroupTours";
import PhotoGallery from "./components/PhotoGallery";
import PopularDestinations from "./components/PopularDestinations";
import Testimonials from "./components/Testimonials";
import TravelBlog from "./components/TravelBlog";
import TrustPartners from "./components/TrustPartners";
import WhyChooseUs from "./components/WhyChooseUs";
import { indiaDestinations, internationalDestinations } from "./data/destinations";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <PopularDestinations />
        <FixedDepartures />
        <FeaturedPackages />
        <DestinationGrid
          id="international"
          icon="🌍"
          script="Explore the World"
          title="International Destinations"
          description="From island escapes to alpine adventures — explore the world with itineraries built for every kind of traveler."
          places={internationalDestinations}
        />
        <DestinationGrid
          id="india"
          icon="🛕"
          script="Incredible India"
          title="India Tours"
          description="Mountains, backwaters, deserts and beaches — discover the country's most breathtaking corners."
          places={indiaDestinations}
        />
        <ExoticDestinations />
        <EmiBanner />
        <HoneymoonGroupTours />
        <WhyChooseUs />
        <PhotoGallery />
        <TrustPartners />
        <Testimonials />
        <CallToAction />
        <TravelBlog />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
