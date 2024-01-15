'use client'
import Image from "next/image";
import Logo from "../shared/logo";
import {
    Form,
    Button,
    Input,
    Divider
} from "antd";

const { Item } = Form;

const Login = ()=>{

    const onFinish = (value)=>{
        console.log(value);
    }
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white w-11/12 md:w-4/12 p-6 rounded-lg shadow-xl flex flex-col gap-y-3 animate__animated animate__zoomIn animate__faster">
                <div className="flex items-center">
                    <h1 className="text-2xl">Say Hi!</h1>
                    <Logo />
                </div>
                <Form onFinish={onFinish}>
                    <Item 
                        name="email" 
                        rules={[
                            {required:true,message: "this field is required"}
                        ]}
                    >
                        <Input 
                            placeholder="example@gmail.com" 
                            style={{borderRadius:0}} 
                            size="large"
                        />
                    </Item>
                    <Item>
                        <Button 
                            htmlType="submit"
                            className=" bg-indigo-900 w-full text-white font-bold" 
                            style={{borderRadius:0}} 
                            size="large"
                        >
                            Login
                        </Button>
                    </Item>
                </Form>
                <Divider>OR</Divider>
                <div className="flex flex-col gap-y-4">
                    <Button 
                        size="large" 
                        className="w-full flex items-center justify-center" 
                        style={{borderRadius:0}} 
                        icon={<Image src="/icons/google.png" width={32} height={32} alt="google" />}
                    >
                        Continue with google
                    </Button>
                    <Button 
                        size="large" 
                        className="w-full flex items-center justify-center" 
                        style={{borderRadius:0}} 
                        icon={<Image src="/icons/facebook.png" width={32} height={32} alt="facebook" />}
                    >
                        Continue with facebook
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Login;