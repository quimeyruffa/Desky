import './App.css';
import { Footer } from './components/Footer/Footer';
import Navbar from "./components/Navbar/Navbar";
import { Header } from './components/Header/Header';
import { Clients } from './components/Clients/Clients';
import CarouselComponent from './components/Carousel/Carousel';
import './index.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {SearchCard} from "./components/SearchCard/SearchCard";
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
                    <SearchCard nombre="WeWork" promedioPuntos="2" direccion="direccion 1234" precio="12345"/>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
