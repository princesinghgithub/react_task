import React,{ useContext } from 'react';
import {Link} from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalState';

function UserList() {
   const {users,removeUser}= useContext(GlobalContext);
   console.log(users);

  return (
    <div className='border p-3'>
     {users.map(user=>(
        <ul className="list-group mb-0 mt-4 ">
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                <div className="d-flex align-items-center">
                  <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                <strong>{user.name}</strong> 
                </div>
                <Link className='btn btn-warning ' to={'/edit/${user.id}'}  title="Edit item">
                Edit
                </Link>
                <button onClick={()=>removeUser(user.id)} className="btn btn-danger">Delete</button>
                {/* <Link className='btn btn-danger' on   to=""  title="Remove item">
                Delete
                
                </Link> */}
              </li>
              {/* <li
                className="list-group-item d-flex d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                <div className="d-flex align-items-center">
                  <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." checked />
                  <s>Second item</s>
                </div>
                <Link to="#!" data-mdb-toggle="tooltip" title="Remove item">
                  <i className="fas fa-times text-primary"></i>
                </Link>
              </li> */}
              {/* <li
                className="list-group-item d-flex d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                <div className="d-flex align-items-center">
                  <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                  third item
                </div>
                <Link to="#!" data-mdb-toggle="tooltip" title="Remove item">
                  <i className="fas fa-times text-primary"></i>
                </Link>
              </li> */}
            </ul>
     ))}
 
    </div>
  )
}

export default UserList