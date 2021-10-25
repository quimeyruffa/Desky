import './App.css';
import { Footer } from './components/Footer/Footer';
import Navbar from "./components/Navbar/Navbar";
import { Header } from './components/LandingPageComponents/Header/Header';
import { Clients } from './components/LandingPageComponents/Clients/Clients';
import CarouselComponent from './components/LandingPageComponents/Carousel/Carousel';
import './index.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {SearchCard} from "./components/SearchComponents/SearchCard/SearchCard";
import {Busqueda} from "./components/SearchComponents/Busqueda";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path="/" exact >
                    <Navbar />
                    <Header />
                    <CarouselComponent />
                    <Clients />
                    <Footer />
                </Route>
                <Route path="/search">
                    {/*<Navbar />*/}
                    <Busqueda />
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
