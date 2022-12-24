import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Usercreate from "./Usercreate";

function User() {
    const [user,setUser ] =useState([]);
    useEffect (() => {
        setUser([
            {
                id :1,
                Username:"person 1",
                Email:" person1@gmail.com",
                Country:"India",
                State:"Tamilnadu",
                City:"Chennai",
                Phone:"9876543210",
                dob :"00-00-0000",
                Gender:"male",
            },
            {
                id :2,
                Username:"person 2",
                Email:" person2@gmail.com",
                Country:"India",
                State:"Tamilnadu",
                City:"Chennai",
                Phone:"9876543210",
                dob :"00-00-0000",
                Gender:"male",
            },
            {
              id :3,
              Username:"person 3",
              Email:" person3@gmail.com",
              Country:"India",
              State:"Tamilnadu",
              City:"Chennai",
              Phone:"9876543210",
              dob :"00-00-0000",
              Gender:"female",
          }
        ])
    })

  return (
    <>
      <div class="container-fluid">
        <h1 class="h3 mb-2 text-gray-800">User</h1>
        <Link to={"/user_create"} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <i className="fas fa-download fa-sm text-white-50"></i>Create User
        </Link>
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">
              DataTables Example
            </h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                  <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Phone</th>
                    <th>Dob</th>
                    <th>Gender</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>                   
                </tfoot>
                <tbody>
                {user.map((user) => {
                    return   <tr>
                    <td>{user.id}</td>
                    <td>{user.Username}</td>
                      <td>{user.Email}</td>
                      <td>{user.Country}</td>
                      <td>{user.State}</td>
                      <td>{user.City}</td>
                      <td>{user.Phone}</td>
                      <td>{user.dob}</td>
                      <td>{user.Gender}</td>
                      <td><Link to={`/user/${user.id}`} className="btn btn-warning">
                          View
                          </Link></td>
                    </tr>
                })}
                 
             
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}

export default User;
