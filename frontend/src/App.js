import './App.css';
import { Footer } from './components/Footer/Footer';
import Navbar from "./components/Navbar/Navbar";
import { Header } from './components/LandingPageComponents/Header/Header';
import { Clients } from './components/LandingPageComponents/Clients/Clients';
import CarouselComponent from './components/LandingPageComponents/Carousel/Carousel';
import './index.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {SearchCard} from "./components/SearchComponents/SearchCard/SearchCard";
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
                    <SearchCard nombre="WeWork"
                                promedioPuntos="3.4"
                                direccion="direccion 1234, comuna 13"
                                precio="12345"
                                amenities={["petFriendly", "kitchen", "podcast"]}/>
                    <SearchCard nombre="Cowork Ficticio"
                                promedioPuntos="3"
                                direccion="direccion 1234, comuna 13"
                                precio="12345"
                                amenities={["parking", "dining"]}/>
                    <SearchCard nombre="HIT Cowork"
                                promedioPuntos="4.7"
                                direccion="direccion 1234, comuna 13"
                                precio="12345"
                                amenities={["petFriendly", "podcast", "coffee"]}/>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
