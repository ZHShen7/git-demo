import { Layout, Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react';
import './welcome.css'
const { Header, Content, Footer } = Layout;


const App = () => (
    <Layout>
        <Header
            style={{
                position: 'fixed',
                zIndex: 1,
                width: '100%',
                backgroundColor: 'lightgreen',
                display:'flex',
            }}
        >
            
            <div className="logo">
            
            </div>
            <div style={{
                width:'800px',
                backgroundColor: 'lightgreen',
            }}></div>
            <Menu style={{
                width:'800px',
                backgroundColor: 'lightgreen',
                color:'grey',
                fontSize:'22px'
            }} mode="horizontal" defaultSelectedKeys={['mail']}>
                <Menu.Item key="mail" icon={<MailOutlined />}>
                    主页
                </Menu.Item>
                <Menu.SubMenu key="SubMenu" title="我们的工作" icon={<SettingOutlined />}>
                    <Menu.Item key="two" icon={<AppstoreOutlined />}>
                        Navigation Two
                    </Menu.Item>
                    <Menu.Item key="three" icon={<AppstoreOutlined />}>
                        Navigation Three
                    </Menu.Item>
                    <Menu.ItemGroup title="Item Group">
                        <Menu.Item key="four" icon={<AppstoreOutlined />}>
                            Navigation Four
                        </Menu.Item>
                        <Menu.Item key="five" icon={<AppstoreOutlined />}>
                            Navigation Five
                        </Menu.Item>
                    </Menu.ItemGroup>
                </Menu.SubMenu>
                <Menu.Item key="mail" icon={<MailOutlined />}>
                    加入我们
                </Menu.Item>
            </Menu>
        </Header>
        <Content
            className="site-layout"
            style={{
                padding: '0 50px',
                marginTop: 64,
            }}
        >

            <div
                className="site-layout-background"
                style={{
                    padding: 24,
                }}
            >
            </div>
        </Content>
        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            Ant Design ©2018 Created by Ant UED
        </Footer>
    </Layout>
);

export default App;