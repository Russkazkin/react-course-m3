import './App.css';
import Person from "./Person/Person";

function App() {
  return (
    <div className="App">
        <h1>Hello World! I'm React App</h1>
        <p>This is really working!</p>
        <Person name="Ruslan " age="45" />
        <Person name="Julia" age="46" />
        <Person name="Alex" age="19" />
        <Person name="Masha" age="9">I like cats!</Person>
    </div>
  );
}

export default App;
