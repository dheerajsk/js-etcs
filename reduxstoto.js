import "./ToDoList.css";
import {useSelector, useDispatch} from "react-redux";
import {todoSelector, update} from "../../todoReducer";
import { useState } from "react";


function ToDoList() {

  // please give me data provided by todoSelector from todoReducer.
  const dispatch = useDispatch();
  const value = useSelector(todoSelector);
  const [todoText, setText]=useState();
  const [todoTextIndex, setIndex]=useState();

  return (
      <table className="table">
        <tr>
          <th>To Do</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      {
        value.map((i, index)=>
          <tr>
          <td>
            {todoTextIndex!==index && i}
           {todoTextIndex===index &&  <input className="form-control" 
           onInput={(e)=>{setText(e.target.value)}} value={todoText} type="text"></input>}
            </td>
          <td>
          { todoTextIndex!==index && <button className="btn btn-warning" 
          onClick={()=>{setText(i); setIndex(index)}}>Update</button>} 

          {todoTextIndex===index &&  <button className="btn btn-warning" 
          onClick={()=>{dispatch(update({"index":index, "text":todoText})); 
          setText(); setIndex();}}>Save</button>}  
          
          </td>
          <td><button className="btn btn-danger">Delete</button></td>
        </tr>
          )
      }
    </table>
  );
}

export default ToDoList;