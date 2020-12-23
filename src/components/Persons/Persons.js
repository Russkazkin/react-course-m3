import React from 'react';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

const Persons = ({persons, deletePersonHandler, nameChangedHandler}) => persons.map((person, index) => {
        return <ErrorBoundary key={person.id}>
            <Person {...person}
                    click={() => deletePersonHandler(index)}
                    changed={(event) => nameChangedHandler(event, person.id)}/>
        </ErrorBoundary>
    }
);

export default Persons;