import './App.css';
import { Footer } from './components/Footer/Footer';
import { Search } from './components/Search/Search';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Search/>
     <Footer />
    </div>
  );
}

export default App;
