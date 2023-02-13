import { Button } from "antd";
import { getAuth,signOut} from "firebase/auth";
import {app} from "../Firebase/Firebase"
import "./SignOut.css"
let auth = getAuth(app)
function SignOut(){
    let Signout = () =>{
     signOut(auth)
    }
return(
    <div className="button">
        <Button onClick={Signout} type="primary">LogOut</Button>
    </div>
)
}
export default SignOut;