import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Layout, Menu, Icon } from 'antd';
import pathToRegexp from 'path-to-regexp';

import { dashboardRoutes } from '../router';

const { Sider } = Layout;

function SideBarLayout(props) {
  const {
    location: { pathname }
  } = props;

  const isPathMatchRequestedUrl = path => !!pathToRegexp(path).exec(pathname);

  return (
    <Sider>
      <Menu
        theme="dark"
        mode="inline"
        activeKey={pathname}
        selectedKeys={[pathname]}
      >
        {dashboardRoutes.map(({ path, showAlways, icon, name }) => (
          <Menu.Item key={isPathMatchRequestedUrl(path) ? pathname : path}>
            {(showAlways || isPathMatchRequestedUrl(path)) && (
              <Link to={path}>
                <Icon type={icon} />
                <span className="nav-text">{name}</span>
              </Link>
            )}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
}

export default withRouter(SideBarLayout);
