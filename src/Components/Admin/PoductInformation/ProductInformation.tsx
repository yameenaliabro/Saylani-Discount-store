import { DatabaseOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useState } from "react";
import AdminData from "../AdminData/AdminData";
function Product(){
    const[state,onChange] = useState<boolean>(false)
    let Open = ()=>{
      onChange(true)
    }
    let onok = ()=>{
        onChange(false)
    }
    let oncancel = ()=>{
        onChange(false)
    }
return(
    <div>
        <Modal open={state} 
        onOk={onok} 
        onCancel={oncancel}>
     <AdminData/>
        </Modal>
        <DatabaseOutlined onClick={Open} style={{
            fontSize:30
        }}/>
    </div>
)
}
export default Product;