// @ts-nocheck

import {useEffect} from "react"
import { Button, Form, Input ,InputRef, Spin, Table , Popconfirm} from "antd";
import { addDoc, collection } from "firebase/firestore";
import {useRef} from"react"
import { db } from "../../Firebase/Firebase";
import {useState }from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function UserCart(){
    const [data , setData] = useState([])
    const cartDat  = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
      setData(cartDat)
   },[])
   const handleDelete = (dt) => {
    const newData = data.filter((item) => item.key !== dt.key);
    setData(newData);
  };
  const userDetail = useSelector(state => state.user)
  const columns: ColumnsType<DataType> = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_,record) =>(
        <Popconfirm title="Sure to delete?" onConfirm={()=> handleDelete(record)}> 
       <a>Delete</a>
       </Popconfirm> 
      )
    }
  ];
  
   const placeOrder = () =>{
      if(!userDetail){
       navigate('/login') 
      }else{
        console.log(userDetail)
        const userID = userDetail.uid
        push(ref(db , "purchasement/" + userID),{
          checkoutData: data,
          timeStamp: new Date().toString()
        })
        .then(()=>{
          navigate('/orderDetails')
        })
      }
   }
const[state,changestate] = useState<boolean>(false)
    let ref1 = useRef<InputRef>(null)
    let ref2 = useRef<InputRef>(null)
    let ref3 = useRef<InputRef>(null)
    let add  = async ()=>{
        changestate(true)
        let value1 = ref1.current!.input!.value
        let value2 = ref2.current!.input!.value
        let value3 = ref3.current!.input!.value
        try {
          const docRef = await addDoc(collection(db, "Admin"), {
            Name : value1,
            Email :value2,
            ContactNumber : value3,
          }).then(()=>{
            changestate(false)
          })
        } catch (e) {
          console.error("Error adding document: ", e);
        }    }
return(
    <div>
        <Spin spinning={state}>
        <Table
    columns={columns}
    expandable={{
      rowExpandable: (record) => record.name !== 'Not Expandable',
    }}
    dataSource={data}
  />
    <Button onClick={()=> placeOrder()} >Place Order</Button>
        <Form style={{
            display : "flex",
            justifyContent : "center",
            alignItems : "center",
            flexDirection : "column",
               marginTop :300
        }}>
            <Form.Item>
                <Input type="text" placeholder="Enter a fullName" ref={ref1} />
            </Form.Item>  
             <Form.Item>
                <Input type="email" placeholder="Enter a EmailAddress" ref={ref2}/>
            </Form.Item>  
             <Form.Item> 
                <Input type="number" placeholder="Enter a Contact Number" ref={ref3}/>
            </Form.Item>   
            <textarea placeholder="Shoping Adress">
            </textarea>
            <Form.Item style={{
                marginTop : 10
            }}>
                <Button type="primary" block onClick={add}>Place  Holder</Button>
            </Form.Item>   
        </Form>
        </Spin>
    </div>
)
}
export default UserCart;