import "./App.css";
import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";

function App() {
  return (
    <div className="App">
      <Header />
      <CreateNote />
      <Note />
      <Note />
      
      <Note />
    </div>
  );
}

export default App;
