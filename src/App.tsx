import "./App.css";
import { INTERACTIONS } from "./data/interactions";

function App() {
  return <pre>{JSON.stringify(INTERACTIONS, null, 2)}</pre>;
}

export default App;
