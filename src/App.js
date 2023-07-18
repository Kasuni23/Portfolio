import Navbar from "./Component/Navbar/Navbar";
import './App.css'
import Intro from "./Component/Introduction/Intro";
import Services from "./Component/Services/Services";
import Project from "./Component/Projects/Project";
import Contact from "./Component/Contacts/Contact";
import Footer from "./Component/Footer/Footer";
import Blog from "./Component/Blog/Blog";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Project/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
