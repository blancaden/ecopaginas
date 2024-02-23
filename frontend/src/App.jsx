

import './App.css'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import Footer from './components/Footer'
import { Routes as Routes, Route } from "react-router-dom"; 
import HomePage from './pages/HomePage';
import Promotions from './pages/Promotions'
import WhatsNew from './pages/WhatsNew';
import TopBooks from './pages/TopBooks';

function App() {


  return (
    <> <div>
      <Navbar />
     <Routes>
        <Route path="/" element={<HomePage /> } /> 
        <Route path="/Promociones" element={<Promotions />} />
        <Route path="/Novedades" element={<WhatsNew />} />
        <Route path="/Top_libros" element={<TopBooks />} />
        
      </Routes>
     <Layout />
     <Footer />
    </div>
    
    </>
  )
}

export default App
