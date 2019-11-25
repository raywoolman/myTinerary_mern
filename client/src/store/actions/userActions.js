import {ADD_USER} from './actionTypes'


export function addUser(userDetails) {
    return {
        type: ADD_USER,
        userDetails
    }
}

