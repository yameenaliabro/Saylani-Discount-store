import { CameraOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Space, Upload } from "antd";
import Product from "../PoductInformation/ProductInformation";
import "./Product.css"
function NewProduct(){
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };
return(
    <div className="product">
        <h3>Add New Item</h3>
                <Form style={{
           maxWidth:300 ,
           display : 'flex',
           flexDirection : "column",
        }}>
        <Upload>
           <Button><CameraOutlined/></Button>
            </Upload>
            <Form.Item>
            <Input type="text" placeholder="Item Name"/>
            </Form.Item>
          <textarea style={{
            width:200,
            height:100,
            border : "1px solid grey"
          }} placeholder="Enter a Describtion">
          </textarea >
          <Form.Item>
            <label>Unit Name</label>
            <Input type="text" placeholder="Pcs/kg/dozen"/>
          </Form.Item>
          <Form.Item>
            <label >Unit Price</label>
          <Input type="number" placeholder="Unit Price"/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" >AddProduct</Button>
          </Form.Item>
          </Form>


    </div>
)
}
export default NewProduct;