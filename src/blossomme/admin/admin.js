import React from "react";
import { Layout, Menu, Breadcrumb, Row, Col,Divider, Space, DatePicker, Input, Select, Radio, Typography  } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import moment from 'moment';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { RangePicker } = DatePicker;
const { Title } = Typography;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const { Option } = Select;

class Admin extends React.Component {
    state = {
        value: 1,
    };

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };
    render() {
        return (
            <>
                <Layout>
                    <Layout>
                        <Sider width={200} className="site-layout-background">
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                                    <Menu.Item key="1">option1</Menu.Item>
                                    <Menu.Item key="2">option2</Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Content
                                className="site-layout-background"
                            >
                                <Divider orientation="left"><Title level={2}>Q&amp;A</Title></Divider>
                                <Layout>
                                    <Row>
                                        <Col span={3}>
                                            <Title level={4}>문의일</Title>
                                        </Col>
                                        <Col span={13} style={{textAlign:'left'}}>
                                            <Space direction="vertical" size={12}>
                                                <RangePicker
                                                    defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                                                    format={dateFormat}
                                                />
                                            </Space>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={3}>
                                            <Title level={4}>처리상태</Title>
                                        </Col>
                                        <Col span={13} style={{textAlign:'left'}}>
                                            <Radio.Group onChange={this.onChange} value={this.state.value}>
                                                <Radio value={1}>A</Radio>
                                                <Radio value={2}>B</Radio>
                                                <Radio value={3}>C</Radio>
                                                <Radio value={4}>D</Radio>
                                            </Radio.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={3}>
                                            <Title level={4}>분류</Title>
                                        </Col>
                                        <Col span={13} style={{textAlign:'left'}}>
                                            <Select defaultValue="Option1">
                                                <Option value="Option1">Option1</Option>
                                                <Option value="Option2">Option2</Option>
                                            </Select>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={3}>
                                            <Title level={4}>키워드 검색</Title>
                                        </Col>
                                        <Col span={13} style={{textAlign:'left'}}>
                                            <Input.Group compact>
                                                <Select defaultValue="Option1">
                                                    <Option value="Option1">Option1</Option>
                                                    <Option value="Option2">Option2</Option>
                                                </Select>
                                                <Input style={{ width: '50%' }} defaultValue="input content" />
                                            </Input.Group>
                                        </Col>
                                    </Row>
                                </Layout>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </>
        )
    }
}

export default Admin;