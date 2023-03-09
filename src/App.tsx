import { Button, Input } from "antd";
import { Route, Routes } from "react-router-dom";
import SideNav from "./Components/Admin/AdmiHome/AdminHome";
import AdminData from "./Components/Admin/AdminData/AdminData";
import AdminMain from "./Components/Admin/AdminMain";
import SignIn from "./Components/SignIn/SignIN";
import UserAuth from "./Components/UserAuth/UserAuth";
import Tab from "./Components/UserData/Icon/Icon";
import UserData from "./Components/UserData/UserHome/UserData";
import  {getStorage,ref,uploadBytes} from "firebase/storage"
import { app } from "./Components/Firebase/Firebase";
import {useState} from "react"
import { async } from "@firebase/util";
import image1 from "./Components/UserData/Card/Img/1.jpg";
function App(){
    const[upload,setupload] = useState<any>("")
    let storage = getStorage(app)
    let add = async(cover:any)=>{
 const imageref  =ref(storage,`${image1}- ${Date.now()} - ${cover.name}`) 
 const uploaresult = await uploadBytes(imageref,cover)
 console.log(uploaresult)
    }
return( 
    <div>   
        {/* <Routes>
            <Route path="/" element={<UserAuth/>}/>x    
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/admin" element={<AdminMain/>}/>
            <Route path="/user" element={<Tab/>}/>
        </Routes> */}
        <Button onClick={add}>AddPhoto</Button>
        <Input type="file" onChange={add}/>
    </div>
)

}
export default App;