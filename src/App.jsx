import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Catalog from "./components/Catalog";
import Slider from "./components/Slider";
import Contact from "./components/Contact";
import Review from "./components/Review";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Slider />
      <Catalog />
      <Review />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
