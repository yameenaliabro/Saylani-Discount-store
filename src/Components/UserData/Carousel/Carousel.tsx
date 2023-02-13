import image1 from "./Img/1.jpg"
import image2 from "./Img/2.jpg"
import image3 from "./Img/3.jpg"
import {Image} from "antd"
import { Carousel } from "antd"
function Slider(){
    return(
        <div>
            <Carousel fade
            dots={true}
            autoplay              >
            <div>
            <Image src={image1} className="img" style={{
                width:1700,
                height:600
            }}/>
        </div>
        <div>
            <Image src={image2} className="img" style={{
                width:1700,
                height:600
            }}/>
        </div>
        <div>
            <Image src={image3} className="img"style={{
                width:1700,
                height : 600
            }}/>
        
            </div>
            </Carousel>
</div>

    )   
}
export default Slider;