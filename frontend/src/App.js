import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>

        <Footer />
      
    </div>
  );
}

export default App;
