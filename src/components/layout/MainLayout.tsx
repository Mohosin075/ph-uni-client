import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, MenuProps, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { adminSidebarItems } from "../../routes/admin.routes";

const { Header, Sider, Content } = Layout;

function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsedWidth={0}
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical">
          <h1
            style={{
              color: "white",
              textTransform: "uppercase",
              height: "3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ph uni
          </h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={adminSidebarItems}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
