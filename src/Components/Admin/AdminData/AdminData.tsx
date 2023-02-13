import { Button, Form, Input, Upload } from "antd";
function AdminData(){
return(
    <div>
        <div>
      <Form>
        <Form.Item>
          <label > ProductName : </label>
          <Input type="text" placeholder="Enter a Name"/>
          <label>Product Price</label>
          <Input type="number" placeholder="Enter a Prce"/>
        </Form.Item>
        <Form.Item>
          <Button><Upload>UploadItem</Upload></Button>
        </Form.Item>
      </Form>
            </div>
    </div>
)
}
export default AdminData;