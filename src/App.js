import Navbar from "./Components/Navbar/Navbar";
import HeroModel from "./Components/HeroModel/HeroModel";
import CardSection from "./Components/CardSection/CardSection";
import FeaturesSection from "./Components/FeaturesSection/FeaturesSection";
import ServicesSection from "./Components/ServicesSection/ServicesSection";
import JobSection from "./Components/JobsSection/JobSection";
import ClientsSection from "./Components/ClientsSection/ClientsSection";

function App() {
  return (
    <div>
        <Navbar />
        <HeroModel />
        <CardSection />
        <FeaturesSection />
        <ServicesSection />
        <JobSection />
        <ClientsSection />
    </div>
  );
}

export default App;
