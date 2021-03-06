import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import ContentHeader from "./dashHeader";
import MainSidebar from "./dashSidebar";

import "./style.less";

const { Header, Sider, Content } = Layout;

const Home = props => {
  const [collapsed, setCollapsed] = useState(false);

  let siderWidth = 250;
  const handleCollapse = (collapsed, type) => {
    console.log("onCollapse: ", collapsed, type);
  };

  const handleBreakpoint = broken => {
    console.log("Breakpoint: ", broken);
    setCollapsed(broken);
  };

  return (
    <div className="dashboard-page">
      <Layout className="main-layout">
        <Sider
          collapsible={true}
          theme="light"
          width={siderWidth}
          trigger={null}
          collapsedWidth="60"
          onCollapse={handleCollapse}
          onBreakpoint={handleBreakpoint}
          breakpoint="sm"
        >
          <MainSidebar collapsed={collapsed}></MainSidebar>
        </Sider>

        <Layout>
          {collapsed ? (
            <Header className="ant-design-override__min">
              <ContentHeader></ContentHeader>
            </Header>
          ) : (
            <Header className="ant-design-override__max">
              <ContentHeader></ContentHeader>
            </Header>
          )}

          <Content className="main-content-wrapper">{props.children}</Content>
        </Layout>
      </Layout>
    </div>
  );
};

/* https://www.youtube.com/watch?v=xn68rjtsBSk */
/* https://codedaily.io/tutorials/48/Use-matchPath-to-Match-Nested-Route-Paths-in-Parent-Routes-with-React-Router */

export default Home;
