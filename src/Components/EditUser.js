import React from 'react'
import {Link} from 'react-router-dom'
function EditUser() {
  return (
    <div>
      <form onSubmit={onsubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
  <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
</form></div>
  )
}

export default EditUser