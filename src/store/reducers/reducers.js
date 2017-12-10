import React from 'react';
import * as actionTypes from '../actionTypes/actionTypes';

const initialState = {
    persons: []
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PERSON_ADDED:
        return {
            ...state, persons : [...state.persons, action.payload]
        };
        case actionTypes.PERSON_DELETED:
        return {
                ...state.persons,
                persons : state.persons.filter(person => person.id !== action.unId)
            };
        default: return state;
    }
}

export default reducers;