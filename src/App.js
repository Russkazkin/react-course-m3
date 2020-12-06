import React, {Component} from 'react';
import 'bootstrap/scss/bootstrap.scss';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Ruslan', age: 45},
            {name: 'Julia', age: 46},
            {name: 'Alex', age: 19},
            {name: 'Masha', age: 9},
        ],
        showPersons: false,
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

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow,
        });
    }


    render() {
        const style = {
            color: 'white',
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
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
        return (
            <div className="App container">
                <h1>Hello World! I'm React App</h1>
                <p>This is really working!</p>
                <button className="btn btn-info" style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
            </div>
        );
    }
}

export default App;
