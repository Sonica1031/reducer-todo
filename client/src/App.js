import React, { useReducer, useState } from 'react';
import './App.css';
import reducer, {initialValue} from './Components/reducer';
import Showing from './Components/Showing';

function App() {
 
const [state, dispatch] = useReducer(reducer, initialValue)
const [value, setValue] = useState([])
const [showing, setShowing] = useState([])

const onChange = (e) =>{
  e.preventDefault();
  setValue(e.target.value);
}
const onClickButton = (e) =>{
e.preventDefault();
setShowing([showing, <Showing title={value} onClick={onClick}/>])
return showing;
}
  const onClick = (e) =>{
      e.preventDefault();
      setShowing(showing.map(item =>{
       if(e.target.id === item.id){
        dispatch({item : "CHANGE_CLASS"})
        console.log(item)
        return item
      }
    }))
    }

  // function onSub(e){
  //   e.preventDefault();
  //   setShowing(showing.filter(item =>item.completed = true))
  //   } 

  return (
    <div className="App">
      <form>
      <h1>Your To Do's</h1>
      <input onChange={onChange} type="text" placeholder = "Add To Your To Do List Here" />
      <h1></h1>
      <button onClick={onClickButton}>Add</button>
      <button>Remove</button>
      </form>
      <div>
        {showing}
      </div>
    </div>
  );
}

export default App;
