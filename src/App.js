import './App.css';
import Person from "./Person/Person";
import {useState} from "react";

function App() {
    const [persons] = useState([
        {name: 'Ruslan', age: 45},
        {name: 'Julia', age: 46},
        {name: 'Alex', age: 19},
        {name: 'Masha', age: 9},
    ]);

    return (
        <div className="App">
            <h1>Hello World! I'm React App</h1>
            <p>This is really working!</p>
            <button>Switch Name</button>
            <Person name={persons[0].name} age={persons[0].age}/>
            <Person name={persons[1].name} age={persons[1].age}/>
            <Person name={persons[2].name} age={persons[2].age}/>
            <Person name={persons[3].name} age={persons[3].age}>I like cats!</Person>
        </div>
    );
}

export default App;
