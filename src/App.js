import "./App.css";

//Components
import Comments from "./components/Comments";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Rotas from "./components/Rotas";

function App() {
  return (
    <div className="App">
      <Home />
      <Comments />
      <Rotas />
      <Footer />
    </div>
  );
}

export default App;
