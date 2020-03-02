import React from 'react';

export const initialValue = (e) => {
e.preventDefault();
return {completed: false}
}


function reducer(state, action){
    switch(action.completed){
        case "CHANGE_CLASS":
            return {...state, completed: !action.completed}
        default:
            return {...state, initialValue}
    }

}

export default reducer;