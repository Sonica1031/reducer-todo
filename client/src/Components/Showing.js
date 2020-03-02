import React, {useReducer} from 'react';


const Showing = (props) =>{
    return(
        <div id={Date.now()} onClick={props.onClick}>
        <h1>{props.title}</h1>
        </div>
    )
}

export default Showing;