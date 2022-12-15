import { Route, Routes } from "react-router";
import SingleProduct from "../Component/SingleProduct";
import Post from "../Component/Post"
function AllRoute(){
    return <div>
        <Routes>
            <Route path="/products/:id" element={<SingleProduct/>} ></Route>
            <Route path="*" element={<Post/>}></Route>
        </Routes>
    </div>
}
export default AllRoute