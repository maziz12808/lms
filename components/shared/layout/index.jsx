'use client';
import Link from "next/link";
import { useState } from "react";
import { 
    CameraOutlined, 
    DashboardOutlined, 
    MenuOutlined 
} from "@ant-design/icons";
import {
    Layout,
    Button,
    Menu
} from "antd";

const {Sider,Content,Header} = Layout;
const { Item } = Menu;

const LayoutEl = ({children})=>{
    const [open,setOpen] = useState(false);
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
                <Header className="bg-gray-200 px-8">
                    <Button type="text" icon={<MenuOutlined />} onClick={()=> setOpen(!open)} />
                </Header>
                <Content className="p-8">
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
} 

export default LayoutEl;