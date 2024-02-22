

import './App.css'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import Footer from './components/Footer'
import { Routes as Routes, Route } from "react-router-dom"; 
import HomePage from './pages/HomePage';
import Promotions from './pages/Promotions'

function App() {


  return (
    <> <div>
      <Navbar />
     <Routes>
    
        <Route path="/" component={HomePage} /> 
        <Route path="/Promotions" component={Promotions} />
        {/* <Route path="/projects" element={<HomePage />} />  */}
           {/* <Route path="*" element={ <ErrorPage /> }  /> */}
      
      </Routes>
     <Layout />
     <Footer />
    </div>
    
    </>
  )
}

export default App
