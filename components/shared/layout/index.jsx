'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { 
    CameraOutlined, 
    DashboardOutlined, 
    MenuOutlined 
} from "@ant-design/icons";
import {
    Layout,
    Button,
    Menu,
    Spin
} from "antd";
import Logo from "../logo";

const {Sider,Content,Header} = Layout;
const { Item } = Menu;

const LayoutEl = ({children})=>{
    const [open,setOpen] = useState(false);
    const [loader,setLoader] = useState(true);
    const menu = [
        {
            label: "Dashboard",
            href: "/",
            icon: <DashboardOutlined />
        },
        {
            label: "Courses",
            href: "/course",
            icon: <CameraOutlined />
        },
    ]
    useEffect(()=>{
        const releaseTimer = setTimeout(()=>{
            setLoader(false)
        },500)
        return ()=>{
            clearInterval(releaseTimer)
        }
    },[])
    if(loader) return (
        <div className="flex justify-center items-center min-h-screen">
            <Spin size="large" />
        </div>
    )
    return (
        <Layout>
            <Sider
                collapsible 
                collapsed={open} 
                trigger={null} 
                className=" min-h-screen" 
            >
                <Menu theme="dark">
                    {
                        menu.map((menuItem,menuIndex)=>(
                            <Item key={menuIndex} icon={menuItem.icon}>
                                <Link href={menuItem.href}>{menuItem.label}</Link>
                            </Item>
                        ))
                    }
                </Menu>
            </Sider>
            <Layout>
                <Header className="bg-gray-200 px-8 flex items-center justify-between">
                    <div className="flex">
                        <Button 
                            type="text" 
                            icon={<MenuOutlined />} 
                            onClick={()=> setOpen(!open)} 
                        />
                        <Logo />
                    </div>
                    <div>
                        <Button 
                            type="text" 
                            icon={<MenuOutlined />} 
                            onClick={()=> setOpen(!open)} 
                        />
                    </div>
                </Header>
                <Content className="p-8">
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
} 

export default LayoutEl;