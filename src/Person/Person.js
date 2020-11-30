const Person = ({name, age, click, changed, children}) => {
    return (
        <div>
            <p onClick={click}>I'm {name} and I'm years {age} years old!</p>
            <p>{children}</p>
            <input onChange={changed} value={name}/>
        </div>
    );
}

export default Person;