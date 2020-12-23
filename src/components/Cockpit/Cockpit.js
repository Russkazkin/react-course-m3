import React from "react";
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

const Cockpit = ({showPersons}) => (
    <StyledDiv>
        <h1>Hello World! I'm React App</h1>
        <p>This is really working!</p>
        <button className={"btn " + (showPersons ? 'btn-danger' : 'btn-success')}
                style={style}
                onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
    </StyledDiv>
);

export default Cockpit;