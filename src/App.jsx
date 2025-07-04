import { Route, Routes } from "react-router"
import Home from "./page/Home"
import Login from "./page/Login"
import Register from "./page/Register"
import Reset from "./page/Reset"
import Navbar from "./page/Navbar"


function App() {


  return (
    <>
      <Navbar />
    <div className="container mx-auto">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="reset" element={<Reset />} />
      </Routes>
    </div>
    </>
  )
}

export default App
