import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

import SideBarLayout from './SideBarLayout';
import HeaderLayout from './HeaderLayout';
import FooterLayout from './FooterLayout';

import { dashboardRoutes } from '../router';

const { Content } = Layout;

function MainLayout() {
  return (
    <Layout style={{ marginLeft: '200px' }}>
      <SideBarLayout />
      <Layout>
        <HeaderLayout />
        <Content>
          <Switch>
            {dashboardRoutes.map(route => (
              <Route
                exact={true}
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))}
            <Redirect to="/" />
          </Switch>
        </Content>
        <FooterLayout />
      </Layout>
    </Layout>
  );
}

export default MainLayout;
