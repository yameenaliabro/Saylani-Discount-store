import image1 from "./Img/4.jpg"
import image2 from "./Img/5.jpg"
import image3 from "./Img/6.jpg"
import image4 from "./Img/3.jpg"
  import { Row, Col,Image,Card, Button,} from 'antd';
  import {useDispatch} from "react-redux"
function AdminCard2(){
        return (
          <div style={{
            marginTop:50,
            marginBottom : 200
          }}>
        <Row style={{
          display:"flex",
          flexWrap:"wrap",
          justifyContent:"space-around"
        }}>
          <Col 
>
          <Card  style={{
            backgroundColor : "#efefef",
            padding:10
          }} 
          hoverable
           cover ={
            [<Image src={image1} style={{
            width:300,
            height:150
            }}/>]
          }
          > 
                   <h4>Vegatable</h4>
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
              
      <Image src={image2} style={{
        width:300,
       height:150
      }} />
          } 
          
          >   
          <h4>Banana</h4>
          <p>This is product decsription <br/>
            This is abc production dexcriptpion</p>
          </Card>
          </Col>
          <Col>
          <Card style={{
            backgroundColor : "#efefef",
            padding:10
          }}
          hoverable
          
            cover={

            <Image src={image3} style={{
              width:300,
              height:150
            }}/>
        
            }
          >
            <h4>Mango</h4>
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
            <Image src={image4} style={{
              width:300,
              height:150 }}/>}>
                   <h4>Meat</h4>
            <p>This is product decsription <br/>
            This is abc production dexcriptpion</p>
            <b>Rs   450-prkg  </b>
          </Card >
          </Col>
          </Row>
          </div>
    );
    }
export default AdminCard2;