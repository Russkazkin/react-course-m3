import React, {Component} from 'react';
import styled from "styled-components";
import 'bootstrap/scss/bootstrap.scss';
import './App.css';
import Person from './Person/Person';

const StyledApp = styled.div`
  color: #777;
  h1 {
    color: ${props => props.alt ? 'red' :  '#000'};
  }
`;


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

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(item => {
            return item.id === id;
        });

        const person = {...this.state.persons[personIndex]};

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons,
        })
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
                        return <Person {...person}
                                       click={() => this.deletePersonHandler(index)}
                                       changed={(event) => this.nameChangedHandler(event, person.id)}
                                       key={person.id}/>
                    })}
                </div>
            );
        }
        return (
            <StyledApp alt={this.state.showPersons} className="App container">
                <h1>Hello World! I'm React App</h1>
                <p>This is really working!</p>
                <button className={"btn " + (this.state.showPersons ? 'btn-danger' : 'btn-success')} style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
            </StyledApp>
        );
    }
}

export default App;
