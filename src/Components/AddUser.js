import React,{useContext ,useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalState';
import{v4 as uuid} from 'uuid';
// import { Form,FormGroup,Label,input,Button } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
function AddUser() {
  const [name,setName]=useState('');
  const {addUser}= useContext(GlobalContext);
  const navigate =useNavigate();
  const onSubmit =()=>{
    const newUser={
      id: uuid,
      name:'new user'
    }
    addUser(newUser);
    navigate.push('/');
  }
  const onChange=(e)=>{
    setName(e.target.value)
  }
  return (
<div>
<h1> Add User</h1>
<form onSubmit={onSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" name="name"value={name}  onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
  </div>
  {/* <button onClick={()=>addUser(name)} className="btn btn-danger">Submit</button> */}
  <button  className="btn btn-primary">Submit</button>
  <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
</form>
</div>
  )
}

export default AddUser