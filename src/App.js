import "./App.css";
import Header from "./Components/header/header";
import Home from "./Components/home/home";
import About from "./Components/about/about";
import Services from "./Components/services/services";
// import Solution from "./Components/solution/Solution";
import Contact from "./Components/contact/Contact";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Services />
        {/* <Solution /> */}
        <Contact />
      </main>
    </>
  );
}

export default App;
