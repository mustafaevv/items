import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Catalog from "./components/Catalog";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <About/>
      <Catalog/>
    </div>
  );
}

export default App;
