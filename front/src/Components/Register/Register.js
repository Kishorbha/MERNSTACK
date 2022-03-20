import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import baseURL from "../../api"

const Register = () => {
  const [profileImg, setProfile] = useState("")
  const [inpval, setINP] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    add: "",
    desc: "",
  })

  const navigate = useNavigate()

  const setdata = (e) => {
    const { name, value } = e.target
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      }
    })
  }

  const finaldata = {
    ...inpval,
    profileImg,
  }

  const addinpdata = async (e) => {
    e.preventDefault()

    const { name, email, work, add, mobile, desc, age, profileImg } = finaldata

    const res = await fetch(baseURL + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        profileImg,
        name,
        email,
        work,
        add,
        mobile,
        desc,
        age,
      }),
    })

    const data = await res.json()
    console.log(data)

    if (res.status === 422 || !data) {
      console.log("error ")
      alert("error")
    } else {
      alert("user registered")
      console.log("data added")
      navigate("/")
    }
  }

  return (
    <div className="container ">
      <form className="mt-4" encType="multipart/form-data">
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              value={inpval.name}
              onChange={setdata}
              name="name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Profile Photo
            </label>
            <input
              type="file"
              accept="image/*"
              className="form-control"
              id="input-front"
              name="profileImg"
              onChange={(e) =>
                setProfile(URL.createObjectURL(e.target.files[0]))
              }
            />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="email"
              value={inpval.email}
              onChange={setdata}
              name="email"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Age
            </label>
            <input
              type="text"
              value={inpval.age}
              onChange={setdata}
              name="age"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Mobile
            </label>
            <input
              type="number"
              value={inpval.mobile}
              onChange={setdata}
              name="mobile"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Work
            </label>
            <input
              type="text"
              value={inpval.work}
              onChange={setdata}
              name="work"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="text"
              value={inpval.add}
              onChange={setdata}
              name="add"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-12 col-md-12 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <textarea
              name="desc"
              value={inpval.desc}
              onChange={setdata}
              className="form-control"
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className="col-lg-6">
            <button
              type="submit"
              onClick={addinpdata}
              className="btn btn-primary "
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default Register
