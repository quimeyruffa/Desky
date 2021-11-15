import './App.css';
import { Footer } from './components/Footer/Footer';
import Navbar from "./components/Navbar/Navbar";
import { Header } from './components/LandingPageComponents/Header/Header';
import { Clients } from './components/LandingPageComponents/Clients/Clients';
import CarouselComponent from './components/LandingPageComponents/Carousel/Carousel';
import './index.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Busqueda } from './components/SearchComponents/Busqueda'
import Membership from './components/LandingPageComponents/Memberships/Membership';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Bookings } from './components/Bookings/Bookings';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/login" exact>
                        <Navbar />
                        <Login />
                    </Route>
                    <Route path="/register" exact>
                        <Navbar />
                        <Register />
                    </Route>
                    <Route path="/booking" exact>
                        <Navbar />
                        <Bookings />
                        <Footer />
                    </Route>
                    <Route path="/" exact >
                        <Navbar />
                        <Header />
                        <Membership />
                        <CarouselComponent />
                        <Clients />
                        <Footer />
                    </Route>
                    <Route path="/search">
                        <Busqueda />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
