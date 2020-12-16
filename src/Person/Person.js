import './Person.sass';
import Radium from "radium";

const Person = ({name, age, click, changed, children}) => {
    const style = {
        ':hover': {
            backgroundColor: '#111',
            color: '#fff',
        },
        '@media (max-width: 500px)': {
            width: '20rem',
        },
    };
    return (
        <div className="Person card" style={style}>
            <div className="card-body">
                <p onClick={click}>I'm {name} and I'm years {age} years old!</p>
                <p>{children}</p>
                <input className="form-control" onChange={changed} value={name}/>
            </div>
        </div>
    );
}

export default Radium(Person);