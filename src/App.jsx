import "./App.css";
import Banner_section from "./components/banner-section.jsx";
import Card from "./components/card.jsx";
import Info_card from "./components/info_card.jsx";

function App() {
  return (
    <div className="container">
      <Banner_section />
      <Card />
      <Info_card />
    </div>
  );
}

export default App;
