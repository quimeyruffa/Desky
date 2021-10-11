import './App.css';
import { Footer } from './components/Footer/Footer';
import Navbar from "./components/Navbar/Navbar";
import { Header } from './components/Header/Header';
import { Clients } from './components/Clients/Clients';
import CarouselComponent from './components/Carousel/Carousel';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <CarouselComponent />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
