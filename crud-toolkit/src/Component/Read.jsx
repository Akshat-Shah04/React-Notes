import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { showuser } from '../feacture/userDetails';

function Read() {

    const {user,loading} = useSelector((state) => state.app)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(showuser())
    },[])

  return (
    <div className='container'>
      <h1>hello read component</h1>
      <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {user &&
              user.map((data) => {
                return (
                  <tr key={data.id}>
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>
                        <button className="btn btn-success">View</button>
                        <button className="btn btn-danger mx-2">Delete</button>
                        <NavLink  className="btn btn-primary">Edit</NavLink>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
    </div>
  )
}

export default Read
