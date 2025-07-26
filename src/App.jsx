import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return <>
  <div  style={{
        minHeight: "100vh", 
        background: "linear-gradient(to bottom, #FF9933, white, #138808)",
        padding: "20px", 
      }}
  >
    
  <Navbar />
  <Outlet />
  <Footer />
  </div>
  </>;
  
}

export default App;
