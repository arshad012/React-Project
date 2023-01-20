import { Routes, Route } from "react-router-dom";
import HomePage from "../Components/HomePage";
import Login from "../Components/Login";
import Items from "../Components/ItemsPage";

export default function AllRoutes() {

    return <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/login" element={<Login/>} />
        <Route path="/items" element={<Items/>}/>
    </Routes>
}