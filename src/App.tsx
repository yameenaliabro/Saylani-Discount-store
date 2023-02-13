import { Tag } from "antd";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Components/SignIn/SignIN";
import UserConfiram from "./Components/State/SiginUp";
import UserData from "./Components/UserData/UserHome/UserData";
function App(){
return(
    <div>
        <Routes>
            <Route path="/" element={<UserConfiram/>}/>
            <Route path="/signin" element={<SignIn/>}/>
        </Routes>
    </div>
)

}
export default App;