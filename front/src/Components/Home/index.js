import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"
import CreateIcon from "@mui/icons-material/Create"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import baseURL from "../../api"

const Home = () => {
  const [employee, setEmployee] = useState([])

  const getdata = async (e) => {
    const res = await fetch(baseURL + "/employee", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    const data = await res.json()

    if (res.status === 422 || !data) {
      console.log("error ")
      alert("error")
    } else {
      setEmployee(data)
    }
  }
  useEffect(() => {
    getdata()
  }, [])
  // console.log(baseURL)
  console.log(employee)

  const deleteuser = async (id) => {
    const res2 = await fetch(baseURL + `/employee/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const deletedata = await res2.json()
    console.log(deletedata)

    if (res2.status === 422 || !deletedata) {
      console.log("error")
    } else {
      alert("user deleted")
      console.log("user deleted")
      getdata()
    }
  }

  return (
    <div className="mt-5">
      <div className="container ">
        <div className="add_btn mt-2 mb-2">
          <NavLink to="/register">
            <button className="btn btn-primary ">Add data</button>
          </NavLink>
        </div>

        <table className="table mt-2">
          <thead>
            <tr className="table-dark ">
              <th scope="col">Id</th>
              <th scope="col">Full Name</th>
              <th scope="col">Email</th>
              <th scope="col">Job</th>
              <th scope="col">Contact</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {employee?.map((employee, id) => {
              return (
                <React.Fragment key={id}>
                  <tr className="table-light">
                    <th scope="row">{id + 1}</th>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.work}</td>
                    <td>{employee.mobile}</td>
                    <td className="d-flex justify-content-around">
                      <NavLink to={`view/${employee._id}`}>
                        <button className="btn btn-success">
                          <RemoveRedEyeIcon />
                        </button>
                      </NavLink>
                      <NavLink to={`edit/${employee._id}`}>
                        <button className="btn btn-primary">
                          <CreateIcon />
                        </button>
                      </NavLink>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteuser(employee._id)}
                      >
                        <DeleteOutlineIcon />
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
