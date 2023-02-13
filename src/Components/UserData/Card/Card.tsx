import Art from "./Img/1.jpg"
import tecno from "./Img/2.jpg"
import ccnp from "./Img/3.jpg"
import imag4 from "./Img/4.jpg"
  import { Row, Col,Image,Card, Button,} from 'antd';
function Card2(){
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
            [<Image src={Art} style={{
            width:100,
            height:50
            }}/>]
          }
          > 
         <p>Meet</p>
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
        width:100,
        height:50
      }} />
          } 
          
          >   
          <p>Meat</p>

          </Card>
          </Col>
          <Col>
          <Card style={{
            backgroundColor : "#efefef",
            padding:10
          }}
          hoverable
          
            cover={

            <Image src={tecno} style={{
              width:100,
              height:50
            }}/>
        
            }
          >
            <p>Vegatables</p>
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
              width:100,
              height:50
            }}/>
        
            }
          >
            <p>Vegatables</p>
          </Card >
          </Col>
          </Row>
          </div>
    );
    }
export default Card2;
