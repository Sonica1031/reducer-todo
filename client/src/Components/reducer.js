import React from 'react';

export const initialValue = {
completed: false
}


function reducer(state, action){
    switch(action.completed){
        case "CHANGE_CLASS":
            return {...state, completed: true}
        default:
            return initialValue
    }

}

export default reducer;