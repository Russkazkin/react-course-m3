import './Person.sass';

const Person = ({name, age, click, changed, children}) => {
    return (
        <div className="Person card">
            <div className="card-body">
                <p onClick={click}>I'm {name} and I'm years {age} years old!</p>
                <p>{children}</p>
                <input className="form-control" onChange={changed} value={name}/>
            </div>
        </div>
    );
}

export default Person;