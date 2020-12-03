import React, {Component} from 'react';
import 'bootstrap';
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

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: 'Ruslan', age: 45},
                {name: 'Julia', age: 46},
                {name: newName, age: 19},
                {name: 'Maria', age: 9},
            ]
        });
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Ruslan', age: 45},
                {name: 'Julia', age: 46},
                {name: event.target.value, age: 19},
                {name: 'Maria', age: 9},
            ]
        });
    }


    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            borderRadius: '4px',
            cursor: 'pointer',
        };
        return (
            <div className="App">
                <h1>Hello World! I'm React App</h1>
                <p>This is really working!</p>
                <button style={style} onClick={() => this.switchNameHandler('Pyndel')}>Switch Name</button>
                <Person name={this.state.persons[0].name}
                        age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name}
                        age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name}
                        age={this.state.persons[2].age}
                        click={this.switchNameHandler.bind(this, 'Alexandra')}
                        changed={this.nameChangedHandler}/>
                <Person name={this.state.persons[3].name}
                        age={this.state.persons[3].age}>
                    I like cats!
                </Person>
            </div>
        );
    }
}

export default App;
