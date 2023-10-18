import "./App.css";

//Components
import Comments from "./components/Comments";
import Home from "./components/Home";
import Rotas from "./components/Rotas";

function App() {
  return (
    <div className="App">
      <Home />
      <Comments />
      <Rotas />
    </div>
  );
}

export default App;
