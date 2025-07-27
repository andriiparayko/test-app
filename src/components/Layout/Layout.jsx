import { Layout as AntLayout, Menu } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";

import { MENU_ITEM_LIST } from "./constants.js";
import { getCurrentPath } from "./utils.js";

const { Header, Content } = AntLayout;

const Layout = () => {
  const location = useLocation();

  const currentPath = getCurrentPath(location);

  return (
    <AntLayout>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[MENU_ITEM_LIST[0].key]}
          selectedKeys={[currentPath]}
        >
          {MENU_ITEM_LIST.map((item) => (
            <Menu.Item key={item.key}>
              <Link to={item.path}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content style={{ padding: "24px" }}>
        <Outlet />
      </Content>
    </AntLayout>
  );
};

export default Layout;
