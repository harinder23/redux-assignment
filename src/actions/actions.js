import * as actionTypes from '../store/actionTypes/actionTypes';

export function addPersonHandler() {
    const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: 'Max',
        age: Math.floor(Math.random() * 40)
    };

    return (dispatch) => {
        dispatch({type : actionTypes.PERSON_ADDED, payload : newPerson});
    }
}