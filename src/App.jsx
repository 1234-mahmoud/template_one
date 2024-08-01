import "./style/App.css";
import Header from './components/Header';
import Landing from "./components/Landing";
import Features from './components/Features';
import Services from "./components/Services";
import Portofolio from "./components/Portofolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Landing/>
      <Features/>
      <Services/>
      <Portofolio/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
