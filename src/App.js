import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Ruslan', age: 45},
            {name: 'Julia', age: 46},
            {name: 'Alex', age: 19},
            {name: 'Masha', age: 9},
        ]
    };

    switchNameHandler = () => {
        // console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
        this.setState({
            persons: [
                {name: 'Ruslan', age: 45},
                {name: 'Julia', age: 46},
                {name: 'Alexandra', age: 19},
                {name: 'Maria', age: 9},
            ]
        });
    };


    render() {
        return (
            <div className="App">
                <h1>Hello World! I'm React App</h1>
                <p>This is really working!</p>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
                <Person name={this.state.persons[3].name} age={this.state.persons[3].age}>I like cats!</Person>
            </div>
        );
    }
}

export default App;
