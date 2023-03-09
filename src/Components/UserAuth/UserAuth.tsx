import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import  {app, db} from "../Firebase/Firebase"
import "./UserAuth.css"
import {Button, Form, Input, InputRef, message, Spin, Typography} from "antd"
import { useState,useRef } from "react";
import Text from "./Text";
import { UserOutlined } from "@ant-design/icons";
import { MessageOutlined, PhoneOutlined } from "@ant-design/icons/lib/icons";
import { Link} from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
const auth = getAuth(app);
function UserAuth(){
    let ref1 = useRef<InputRef>(null)
    let ref2 = useRef<InputRef>(null)
    let ref3 = useRef<InputRef>(null)
    let ref4 = useRef<InputRef>(null)
    let[spin,setspin] = useState(false);
    let submit = async ()=>{
    setspin(true);
    let email  = ref1.current!.input!.value
    let pasword = ref2.current!.input!.value 
    let Name = ref3.current!.input!.value 
    let Contact = ref4.current!.input!.value 
createUserWithEmailAndPassword(auth,email,pasword).then(()=>{
    setspin(false);    
}).catch(()=>{
    setspin(false)
         message.error(" Some thing Went Wrong please try again")
})
try {
    const docRef = await addDoc(collection(db, "users"), {
      Name : Name,
    Contact : Contact
    });console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
    }
return(
    <div className="text">
<Text/>
    <div className="theme" >
    <div>
        <Spin  spinning={spin}>
        <Form>

        <Input type="text" width={20} placeholder="First Name " style={{
            width:300,
        }} 
        prefix={<UserOutlined/>}
        ref={ref3}/><br/><br/>
        <Input type={"number"} width={20} placeholder="Contact Number"
         style={{
            width:300,
    }} 
     prefix={<PhoneOutlined/>}
     ref={ref4}/><br/><br/>
          <Input type={"text"} width={20} placeholder="Enter  Email"
         style={{
            width:300,
       }} 
        ref={ref1}  prefix={<MessageOutlined/>}/><br/><br/>  
        <Input type={"password"} width={20} placeholder="Enter  Password"
        style={{
           width:300,
       }} 
       ref={ref2}/><br/><br/>
        <Button onClick={submit} type="primary"  block>Sign UP</Button>
        </Form>
       <Link to="/signin"><Button type="link">Dont have an accoutn? Register</Button></Link>
</Spin>
    </div>
    </div>
    </div>
)
}
export default UserAuth;