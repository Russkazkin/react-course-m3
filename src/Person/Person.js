import './Person.sass';
import styled from 'styled-components';

const StyledDiv = styled.div`
            @media (max-width: 767px) {
                width: 90%;
            }
        `;

const Person = ({name, age, click, changed, children}) => {
    return (
       <StyledDiv className="Person card">
            <div className="card-body">
                <p onClick={click}>I'm {name} and I'm years {age} years old!</p>
                <p>{children}</p>
                <input className="form-control" onChange={changed} value={name}/>
            </div>
        </StyledDiv>
    );
}

export default Person;