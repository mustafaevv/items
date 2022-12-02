import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Catalog from "./components/Catalog";
import Slider from "./components/Slider";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <About/>
      <Catalog/>
      <Slider/>
    </div>
  );
}

export default App;
