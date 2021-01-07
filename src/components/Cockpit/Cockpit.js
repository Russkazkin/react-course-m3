import React, {useRef, useEffect, useContext} from "react";
import styled from "styled-components";
import AuthContext from '../../context/auth-context';

const style = {
    color: 'white',
};

const StyledDiv = styled.div`
  color: #777;

  h1 {
    color: ${props => props.alt ? 'red' : '#000'};
  }
`;

const Cockpit = ({showPersons, togglePersonsHandler, title, login}) => {
    const toggleButton = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        toggleButton.current.click();
    }, []);

    return (
        <StyledDiv>
            <h1>Hello World! I'm {title}</h1>
            <p>This is really working!</p>
            <button ref={toggleButton}
                    className={"btn mr-3 " + (showPersons ? 'btn-danger' : 'btn-success')}
                    style={style}
                    onClick={togglePersonsHandler}>Toggle Persons
            </button>
            <button className="btn btn-primary" onClick={authContext.login}>Login</button>
        </StyledDiv>
    );
}

export default Cockpit;