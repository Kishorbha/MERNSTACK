const express = require("express")
const multer = require("multer")
const path = require("path")
const router = express.Router()
const users = require("../models/userSchema")

// set Storage Engine
const storage = multer.diskStorage({
  destination: "./public/uploads/img/",
  filename: function (req, file, cb) {
    cb(null, Date.now() + "--" + file.originalname)
  },
})

const upload = multer({
  storage: storage,
}).single("profileImg")

// router.get("/", (req, res) => {
//   console.log("CONNECT")
// })

// TODO:register
router.post("/register", upload, async (req, res) => {
  console.log(req.body)
  const { name, profileImg, email, mobile, age, work, add, desc } = req.body
  if (
    !name ||
    !email ||
    !profileImg ||
    !mobile ||
    !age ||
    !work ||
    !add ||
    !desc
  ) {
    res.status(404).send("Please fill the data")
  }
  try {
    const preuser = await users.findOne({ email: email })

    if (preuser) {
      res.status(422).json("this is user is already present")
    } else {
      const adduser = new users({
        name,
        email,
        mobile,
        age,
        work,
        add,
        desc,
        profileImg,
      })
      await adduser.save()
      res.status(201).json(adduser)
    }
  } catch (error) {
    res.status(422).json(error)
  }
})

// TODO:getAlldata
router.get("/employee", async (req, res) => {
  try {
    const userdata = await users.find()
    res.status(201).json(userdata)
    console.log(userdata)
  } catch (error) {
    res.status(422).json(error)
  }
})

// TODO:getdatabyId
router.get("/employee/:id", async (req, res) => {
  try {
    const { id } = req.params

    const employeeindividual = await users.findById({ _id: id })
    console.log(employeeindividual)
    res.status(201).json(employeeindividual)
  } catch (error) {
    res.status(422).json(error)
  }
})

// TODO:update
router.patch("/employee/:id", async (req, res) => {
  try {
    const { id } = req.params

    const updateduser = await users.findByIdAndUpdate(id, req.body, {
      new: true,
    })

    console.log(updateduser)
    res.status(201).json(updateduser)
  } catch (error) {
    res.status(422).json(error)
  }
})

// TODO:delete
router.delete("/employee/:id", async (req, res) => {
  try {
    const { id } = req.params

    const deletuser = await users.findByIdAndDelete({ _id: id })
    console.log(deletuser)
    res.status(201).json(deletuser)
  } catch (error) {
    res.status(422).json(error)
  }
})

module.exports = router
