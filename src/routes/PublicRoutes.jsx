//Libraries
import { Navigate, Route, Routes } from "react-router-dom"

//Views / Pages
import Login from "../views/account/Login"
import Character from "../views/character/Character"

export default function PublicRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/characters" element={<Character />}/>
        {/* Add anohter routes */}
        <Route path="*" element={<Navigate to="/" replace/>}/>
    </Routes>
  )
}
