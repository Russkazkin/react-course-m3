import React, {useRef, useEffect} from "react";
import styled from "styled-components";

const style = {
    color: 'white',
};

const StyledDiv = styled.div`
  color: #777;

  h1 {
    color: ${props => props.alt ? 'red' : '#000'};
  }
`;

const Cockpit = ({showPersons, togglePersonsHandler, title}) => {
    const toggleButton = useRef(null);

    useEffect(() => {
        toggleButton.current.click();
    }, []);

    return (
        <StyledDiv>
            <h1>Hello World! I'm {title}</h1>
            <p>This is really working!</p>
            <button ref={toggleButton}
                    className={"btn " + (showPersons ? 'btn-danger' : 'btn-success')}
                    style={style}
                    onClick={togglePersonsHandler}>Toggle Persons
            </button>
        </StyledDiv>
    );
}

export default Cockpit;