import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MiApi from "./components/MiApi";

function App() {
  return (
    <>
      <div className="background-container" />
      <h1 className="pokemon-titulo">Buscador Pokémon Hoenn</h1>
      <MiApi />
    </>
  );
}

export default App;
