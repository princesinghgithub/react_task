import React from 'react'
import { Link } from 'react-router-dom'
function Heading() {
    return (
        <>
       <h1>To Do List</h1>
       <nav class="navbar navbar-dark ">
       <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="New Task" aria-label="Search" style={{width:560}}/>
   
  </form>
  <Link  className="btn btn-primary my-2 my-sm-0" to="/add">Add </Link>
</nav>
        </>
    )
}

export default Heading