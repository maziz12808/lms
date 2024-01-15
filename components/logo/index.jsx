import { DingdingOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Logo = ({size=32})=>{
    return (
        <Button 
            className="font-bold shadow-none border-0 w-fit"
            icon={<DingdingOutlined className="text-rose-500"/>} 
            style={
                {
                    fontSize: size,
                    fontFamily: "bela-regular"
                }
            }
        >
            LMS
        </Button>
    )
}

export default Logo;