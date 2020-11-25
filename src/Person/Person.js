const person = ({name, age, children}) => {
    return (
        <div>
            <p>I'm {name} and I'm years {age} years old!</p>
            <p>{children}</p>
        </div>
    );
}

export default person;