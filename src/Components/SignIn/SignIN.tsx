import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import  {app,} from "../Firebase/Firebase"
import {Button, Form, Input, InputRef, message, Spin} from "antd"
import { useState,useRef } from "react";
import { Outlet } from "react-router-dom";
import "./SignUp.css"
const auth = getAuth(app);
function SignIn(){
    let ref1 = useRef<InputRef>(null)
    let ref2 = useRef<InputRef>(null)
    let[spin,setspin] = useState(false);
    let submit = async ()=>{
    setspin(true);
    let email  = ref1.current!.input!.value
    let pasword = ref2.current!.input!.value 
signInWithEmailAndPassword(auth,email,pasword).then(()=>{
    setspin(false);    
}).catch(()=>{
    setspin(false)
         message.error(" Some thing Went Wrong please try again")
})
}
return(
    <div className="theme" >
    <div>
        <Spin  spinning={spin}>
        <Form style={{
           backgroundColor:"rgba(255, 255, 255, 0.815)",
           display : "inline-block",
           padding:20,
           height : 280
        }}>
        <Input type="email" width={20} placeholder="Enter adress " style={{
            width:300,
        }} 
        ref={ref1}/><br/><br/>
        <Input type={"password"} width={20} placeholder="Enter  Password"
         style={{
            width:300,
        }} 
        ref={ref2} />
        <br/><br/>
            <Button onClick={submit} type="primary"  block>Signin</Button>
        </Form>
      </Spin>
    </div>
    <Outlet/>
    </div>
)
}
export default SignIn;