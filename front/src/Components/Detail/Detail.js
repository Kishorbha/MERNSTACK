import React, { useState } from "react"
import CreateIcon from "@mui/icons-material/Create"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import EmailIcon from "@mui/icons-material/Email"
import WorkIcon from "@mui/icons-material/Work"
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import { useParams } from "react-router-dom"

import "./detail.css"

const Detail = () => {
  const { id } = useParams("")
  const [employee, setEmployee] = useState([])

  React.useEffect(() => {
    const getemployee = async () => {
      const res = await fetch(`/employee/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      const data = await res.json()

      if (res.data === 422 || !data) {
        console.log("error")
      } else {
        setEmployee(data)
      }
    }
    getemployee()
  }, [id])
  console.log(employee)

  return (
    <div className="container mt-3 ">
      <h1 className="fw-normal fs-2">Welcome {employee.name}</h1>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <div className="add_btn">
            <button className="btn btn-primary mx-2">
              <CreateIcon />
            </button>
            <button className="btn btn-danger">
              <DeleteOutlineIcon />
            </button>
          </div>
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12">
              <img
                src="https://scontent.fbdp1-1.fna.fbcdn.net/v/t31.18172-8/20934096_1437686139617915_6914272310457910536_o.jpg?_nc_cat=106&ccb=1-5&_nc_sid=19026a&_nc_ohc=EyAOyVhoA7YAX_JxWbS&_nc_ht=scontent.fbdp1-1.fna&oh=00_AT-OBqqyCVDH18SZE6DxhNgUDL31EbtTtAbF7ELxIFnjMQ&oe=62284F5C"
                alt="profile"
              />
              <h3 className="mt-3">
                Name: <span>{employee.name}</span>
              </h3>
              <h3 className="mt-3">
                Age: <span>{employee.age}</span>
              </h3>
              <p className="mt-3">
                <EmailIcon />
                Email: <span>{employee.email}</span>
              </p>
              <p className="mt-3">
                <WorkIcon />
                Occupation: <span>{employee.work}</span>
              </p>
            </div>
            <div className="right_view col-lg-6 col-md-6 col-12">
              <p className="mt-5">
                <PhoneIphoneIcon />
                Mobile: <span>+977 {employee.mobile}</span>
              </p>
              <p className="mt-3">
                <LocationOnIcon />
                Location: <span>{employee.add}</span>
              </p>
              <p className="mt-3">
                Description:
                <span>{employee.desc}</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Detail
