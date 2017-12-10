import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import {connect} from 'react-redux';
import * as actionTypes from '../store/actionTypes/actionTypes';
import {addPersonHandler} from '../actions/actions';

class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAdded} />
                {this.props.pers ? 
                    this.props.pers.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onPersonDeleted(person.id)}/>
                )) : null}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pers : state.persons
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPersonAdded : () => dispatch(addPersonHandler()),
        onPersonDeleted : (persId) => dispatch({type: actionTypes.PERSON_DELETED, unId : persId})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Persons);