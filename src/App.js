import React, {Component} from 'react';
import 'bootstrap/scss/bootstrap.scss';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {id: 'gade96', name: 'Ruslan', age: 45},
            {id: 'asfh35', name: 'Julia', age: 46},
            {id: 'gagd84', name: 'Alex', age: 19},
            {id: 'agga65', name: 'Masha', age: 9},
        ],
        showPersons: false,
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
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
                    {this.state.persons.map((person, index) => {
                        return <Person {...person} click={() => this.deletePersonHandler(index)} key={person.id}/>
                    })}
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
