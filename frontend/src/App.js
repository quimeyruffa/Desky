import './App.css';
import { Footer } from './components/Footer/Footer';
import Navbar from "./components/Navbar/Navbar";
import { Header } from './components/LandingPageComponents/Header/Header';
import { Clients } from './components/LandingPageComponents/Clients/Clients';
import { AmenitiesOficina } from './components/CardOficinaComponents/AmenitiesOficina';
import CarouselComponent from './components/LandingPageComponents/Carousel/Carousel';
import './index.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import { SearchBar } from './components/SearchComponents/Searchbar/Searchbar.js';
import {Busqueda} from './components/SearchComponents/Busqueda'
import Membership from './components/LandingPageComponents/Memberships/Membership';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path="/" exact >
                    <Navbar />
                    <Header />
                    <Membership />
                    <CarouselComponent />
                    <Clients />
                    <Footer />
                    <AmenitiesOficina />
                </Route>
                <Route path="/search">
                    {/*<Navbar />*/}
                    <Busqueda />
                </Route>
                {/* Probando la barra de busqueda*/}
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
