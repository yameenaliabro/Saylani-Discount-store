import Art from "./Img/1.jpg"
import tecno from "./Img/2.jpg"
import ccnp from "./Img/3.jpg"
import imag4 from "./Img/4.jpg"
  import { Row, Col,Image,Card, Button,} from 'antd';
  import {useDispatch} from "react-redux"
import AdminCard2 from "./AdminCard2";
import Product from "../PoductInformation/ProductInformation";
import NewProduct from "../AdminNewProduct/AdminNewProduct";
import "./Admin.css"
function AdmiCard(){
        return (
          <div style={{
            marginTop:50,
            marginBottom : 200
          }}>
            <div className="set" >
                <h3>All Product</h3>
                <Product/>
            </div>
        <Row style={{
          display:"flex",
          flexWrap:"wrap",
          justifyContent:"space-around"

        }}>
          <Col>
          <Card  style={{
            backgroundColor : "#efefef",
            padding:10
          }} 
          hoverable
           cover ={
            [<Image src={Art} style={{
            width:300,
            height:150
            }}/>]
          }
          > 
                   <h4>Meat</h4>
          <p>This is product decsription <br/>
            This is abc production dexcriptpion</p>
          </Card>
          </Col>
  
          <Col >
          <Card style={{
            backgroundColor :"#efefef",
            padding:10
          }}
          hoverable
            cover={ 
      <Image src={ccnp} style={{
        width:300,
       height:150
      }} />}>   
          <h4>Meat</h4>
          <p>This is product decsription <br/>
            This is abc production dexcriptpion</p>
          </Card>
          </Col>
          <Col>
          <Card style={{
            backgroundColor : "#efefef",
            padding:10}}
          hoverable
    cover={
            <Image src={tecno} style={{
              width:300,
              height:150
            }}/>}>
            <h4>Vegatables</h4>
            <p>This is product decsription <br/>
            This is abc production dexcriptpion</p>
          </Card >
          </Col>
          <Col>
          <Card style={{
            backgroundColor : "#efefef",
            padding:10
          }}
      hoverable
            cover={
            <Image src={imag4} style={{
              width:300,
              height:150 }}/>}>
                   <h4>Vegatables</h4>
            <p>This is product decsription <br/>
            This is abc production dexcriptpion</p>
            <b>Rs   450-prkg  </b>
          </Card >
          </Col>
          </Row>
          <AdminCard2/>
          </div>
    );
    }
export default AdmiCard;