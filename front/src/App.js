import React from "react"

import "./App.css"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

import Header from "./Components/Header/index"
import Home from "./Components/Home/index"
import Register from "./Components/Register/Register"
import Edit from "./Components/Edit/Edit"
import Detail from "./Components/Detail/Detail"

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/view/:id" element={<Detail />} />
      </Routes>
    </>
  )
}

export default App
