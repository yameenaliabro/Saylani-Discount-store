import {useEffect,useState} from "react"
import "./UserAccount.css";
import { collection,getDocs } from "firebase/firestore"; 
import { db } from "../../Firebase/Firebase";
import SignOut from "../../SignOut/SignOut";
function UserAccount(){
    const[user,setcuser] = useState<any>([])
    let collectionref = collection(db,"Admin");
    useEffect(()=>{
     const getuser = async ()=>{
        const getuser = await getDocs(collectionref)
        console.log(getuser.docs.map((doc) => ({...doc.data()})))
        setcuser(getuser.docs.map((doc) => ({...doc.data()})))
     }
     getuser();
    },[])
return(
    <div className="Conta">
    {user.map((doc:any)=>{
        return(
            <div>
                <h1>{doc.first}</h1>
                <SignOut/>
          </div>
        )
    })}
    </div>
)
}
export default UserAccount;
