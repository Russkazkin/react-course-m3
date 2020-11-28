const Person = ({name, age, click, children}) => {
    return (
        <div>
            <p onClick={click}>I'm {name} and I'm years {age} years old!</p>
            <p>{children}</p>
        </div>
    );
}

export default Person;