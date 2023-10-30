import "./App.css";
import { useRef } from "react";

//Components
import Comments from "./components/Comments";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Rotas from "./components/Rotas";

function App() {
  const formRef = useRef();
  const sobre = useRef();
  const showForm = () => {
    formRef.current.classList.toggle("showForm");
    sobre.current.classList.toggle("app-over");
  };

  return (
    <div className="App">
      <div ref={sobre} onClick={showForm}></div>
      <Home formRef={formRef} showForm={showForm} />
      <Comments />
      <Rotas />
      <Footer />
    </div>
  );
}

export default App;
