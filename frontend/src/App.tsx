import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./pages/About";
import './App.less';
import { Layout, Menu, Typography, Row, Col } from "antd";

const { Header, Content, Footer } = Layout;
const { Link, Text, Paragraph } = Typography;

interface MenuInfo {
    key: string;
    keyPath: string[];
    item: React.ReactInstance;
    domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}

function App() {
  let navigate = useNavigate();

  const handleMenuClick = ({ key }: MenuInfo) => {
    navigate(key)
  };

  return (
    <Layout className="layout">
      <Header className="header">
        <Menu mode="horizontal" onClick={handleMenuClick} className="menu">
          <Menu.Item key="/" style={{marginLeft: "auto"}}>About</Menu.Item>
          <Menu.Item key="/experience">Experience</Menu.Item>
          <Menu.Item key="/contact">Contact</Menu.Item>
        </Menu>
      </Header>
      <Content className="content">
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </Content>
      <Footer className="footer">
        <Row justify="center" align="middle">
          <Col>
            <Paragraph>
              <Text>Created by myself</Text>
            </Paragraph>
            <Link href="https://github.com/paezao/website">This website is opensource</Link>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
}

export default App;
