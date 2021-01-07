import React, {Component} from 'react';
import 'bootstrap/scss/bootstrap.scss';
import './App.sass';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import AuthContext from "../context/auth-context";

class App extends Component {
    state = {
        persons: [
            {id: 'gade96', name: 'Ruslan', age: 45},
            {id: 'asfh35', name: 'Julia', age: 46},
            {id: 'gagd84', name: 'Alex', age: 19},
            {id: 'agga65', name: 'Masha', age: 9},
        ],
        showPersons: false,
        authenticated: false,
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

    loginHandler = () => {
        this.setState({
            authenticated: true,
        });
    }


    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                deletePersonHandler={this.deletePersonHandler}
                nameChangedHandler={this.nameChangedHandler} />
        }
        return (
            <AuthContext.Provider value={{
                authenticated: this.state.authenticated,
                login: this.loginHandler}}>
                <Cockpit showPersons={this.state.showPersons}
                         togglePersonsHandler={this.togglePersonsHandler}
                         title={this.props.appTitle}
                />
                {persons}
            </AuthContext.Provider>
        );
    }
}

export default withClass(App, 'App container');
