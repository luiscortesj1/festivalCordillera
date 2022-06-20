
import {BrowserRouter } from "react-router-dom"
import Header from "./components/Header/Header";
import Article from "./components/Article/Article";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
     <Header/>
     <Article/>
     <Footer/>
    </BrowserRouter>
  );
}

export default App;
