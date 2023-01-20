import { Routes, Route } from "react-router-dom";
import HomePage from "../Components/HomePage";
import Login from "../Components/Login"

export default function AllRoutes() {

    return <Routes>
        <Route path="/items" element={ <HomePage/> }/>
        <Route path="/login" element={<Login/>} />
    </Routes>
}