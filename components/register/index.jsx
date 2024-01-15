'use client'
import Logo from "@/components/logo";
import Country from '/public/json/country.json'
import Image from 'next/image';
import Link from 'next/link';
import {
    Form, 
    Button, 
    Input, 
    Divider, 
    Select
} from 'antd';

const {Item} = Form;
const {Option} = Select;

const Register = ()=>{
    const onFinish = (values)=>{
        values.mobile = (values.prefix+values.mobile)
        console.log(values)
    }

    const prefixSelector = (
        <Item 
            name="prefix" 
            noStyle 
            rules={[{
                required: true,
                message: 'Dial code is required'
            }]}
        >
          <Select
            style={{
              width: 100,
            }}
            placeholder="+00"
          >
            {
                Country.map((item,index)=>(
                    <Option key={index} value={item.dial_code}>
                        {item.dial_code} {item.code}
                    </Option>
                ))
            }
          </Select>
        </Item>
      );

    return (
        <div className='grid md:grid-cols-2 min-h-screen animate__animated animate__fadeIn md:py-0 py-10'>
            <div className='flex flex-col justify-center items-center md:gap-y-8 gap-y-12'>
                <Logo size={80} />
                <Image 
                    src="/images/register.jpg"
                    width={800}
                    height={500}
                    alt="register"
                />
            </div>
            <div className='bg-gray-100 flex items-center justify-center'>
                <div className="flex flex-col gap-y-1 md:py-0 py-8 md:w-8/12 w-10/12">
                    <h1 className='md:text-left text-center text-2xl font-semibold mb-4'>Start your Journey !</h1>
                    
                    <Form onFinish={onFinish}>
                        <Item
                            name="fullname"
                            rules={[
                                {required: true, message: 'This field is required'}
                            ]}
                        >
                            <Input size="large" style={{borderRadius: 0}} placeholder='Fullname*' />
                        </Item>

                        <Item
                            name="email"
                            rules={[
                                {required: true, message: 'This field is required'}
                            ]}
                        >
                            <Input size="large" style={{borderRadius: 0}} placeholder='Email*' />
                        </Item>
                        <Item
                            name="password"
                            rules={[
                                {required: true, message: 'This field is required'}
                            ]}
                        >
                            <Input type="password" size="large" style={{borderRadius: 0}} placeholder='**********' />
                        </Item>
                        <Item
                            name="mobile"
                            rules={[
                            {
                                required: true,
                                message: 'This field is required',
                            },
                            ]}
                        >
                            <Input addonBefore={prefixSelector} size="large" style={{borderRadius: 0}} />
                        </Item>
                        <Item>
                            <Button 
                                htmlType='submit'
                                size="large" 
                                style={{borderRadius: 0}} 
                                className='w-full bg-indigo-900 text-white border-indigo-900 font-semibold'
                            >Register</Button>
                        </Item>
                    </Form>

                    <Divider />
                    <div className='flex gap-x-2 justify-center'>
                        <p>I have an account</p>
                        <Link href="/login" legacyBehavior>
                            <a className='text-indigo-900 font-semibold'>Login</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;