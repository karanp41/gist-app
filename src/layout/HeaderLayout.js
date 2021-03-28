import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

function HeaderLayout() {

  return (
    <Header>
      <div className="header-wrapper">
        <div className="page-header">Search Gist</div>
      </div>
    </Header>
  );
}

export default HeaderLayout;
