import React from "react";
import TouristInfoCards from "./components/TouristInfoCards";
import Bookings from "./components/Bookings";
import Footer from "./components/Footer";
import SearchResults from "./components/SearchResults";
import "./App.css";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <TouristInfoCards />
      <Bookings />
      <Card />
      <SearchResults />
      <Footer />
    </div>
  );
};

export default App;
