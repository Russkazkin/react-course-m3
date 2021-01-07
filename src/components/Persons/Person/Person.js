import React, {Component} from "react";
import styles from './Person.module.sass';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

const StyledDiv = styled.div`
  @media (max-width: 767px) {
    width: 90%;
  }
`;

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }

    componentDidMount() {
        this.inputElement.current.focus();
    }

    render() {
        const {name, age, click, changed, children} = this.props;
        return (
            <StyledDiv className={'card ' + styles.Person}>
                <div className="card-body">
                    <AuthContext.Consumer>
                        {(context) => context.authenticated ? <p>Authenticated</p> : <p>Please login!</p>}
                    </AuthContext.Consumer>
                    <p onClick={click}>I'm {name} and I'm years {age} years old!</p>
                    <p>{children}</p>
                    <input ref={this.inputElement}
                           className="form-control"
                           onChange={changed}
                           value={name} />
                </div>
            </StyledDiv>
        );
    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    click: PropTypes.func,
    changed: PropTypes.func,
}

export default Person;