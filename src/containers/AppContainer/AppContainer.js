import React, { useContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Spin, notification } from 'antd';
import 'antd/dist/antd.css';

import { LayoutContext } from '../../contexts';
import { handleRequestError } from '../../utils/API';
import { baseRoutes } from '../../router';
import { URL_BASE_NAME } from '../../constants';

import '../../assets/scss/index.scss';

function AppContainer({ history }) {

  const { loading, error, successNotification } = useContext(LayoutContext);

  useEffect(() => {
    const errorMessage = handleRequestError(error);

    !!error &&
      notification.error({
        placement: 'bottomRight',
        message: 'An error occured!',
        duration: 3,
        description: errorMessage
      });
    !!successNotification &&
      notification.success({
        placement: 'bottomRight',
        message: successNotification,
        duration: 3
      });
  }, [error, successNotification]);

  return (
    <>
      <Spin spinning={loading}>
        <Router history={history} basename={URL_BASE_NAME}>
          <Switch>
            {baseRoutes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </Router>
      </Spin>
    </>
  );
}

export default AppContainer;
