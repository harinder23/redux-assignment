import React from 'react';
import * as actionTypes from '../actionTypes/actionTypes';

const initialState = {
    persons: []
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PERSON_ADDED:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor(Math.random() * 40)
            };
            return {
                ...state.persons,
                persons: state.persons.concat(newPerson)
            };
        case actionTypes.PERSON_DELETED:
        return {
                ...state.persons,
                persons : state.persons.splice(action.unId,1)
            };
    }
    return state;
}

export default reducers;