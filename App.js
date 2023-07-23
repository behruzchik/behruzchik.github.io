import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {connect} from "react-redux";
import {userActions} from "./Reducers/userReducer";
import {useEffect} from "react";

function App(props) {
  useEffect(()=>{
    props.loadUsers()
  },[])
  return (
    <div className="App">
      <div className={"input-group"}>
        <input type={"text"} onChange={(e)=>props.handleChange(e.target.value)}/>
        <button onClick={()=>props.saveUser(props.userReducer.inputValue)} className={"btn btn-success"}>SAVE</button>
      </div>
      {props.userReducer.users.map(item=><div><h1>{item.username}</h1></div>)}
    </div>
  );
}

export default connect((state)=>state,{...userActions})(App);
