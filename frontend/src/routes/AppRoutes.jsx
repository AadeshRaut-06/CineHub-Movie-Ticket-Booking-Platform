import HeroSection from "../components/HeroSection";
import BookingForm from "../components/BookingForm";
import BookingTable from "../components/BookingTable";

import "../styles/navbar.css";
import "../styles/table.css";

function AppRoutes() {
  return (
    <div>
      <HeroSection />

      <div className="container">
        <BookingForm />
        <BookingTable />
      </div>
    </div>
  );
}

export default AppRoutes;