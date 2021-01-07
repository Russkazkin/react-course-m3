import React, {PureComponent} from 'react';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

class Persons extends PureComponent {
    render() {
        const {persons, deletePersonHandler, nameChangedHandler} = this.props;
        return persons.map((person, index) => (
            <ErrorBoundary key={person.id}>
                <Person {...person}
                        click={() => deletePersonHandler(index)}
                        changed={(event) => nameChangedHandler(event, person.id)} />
            </ErrorBoundary>
        ));
    }
}

export default Persons;