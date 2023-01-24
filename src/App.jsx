import Navbar from "./components/Navbar";
import LocationCard from "./components/LocationCard";
import data from "./data.js";
import "./App.css";

function App() {
  const locations = data.map((location) => {
    return <LocationCard key={location.id} location={location} />;
  });
  return (
    <div className="app">
      <Navbar />
      <section className="locations">{locations}</section>
    </div>
  );
}

export default App;
