import React, { useReducer } from 'react';
import { SET_GIST } from '../../actions';
import Gist from '../../components/Gist';
import Search from '../../components/Search';
import { URLS } from '../../constants';
import { Col, Row } from 'antd';

import { useFetch } from '../../hooks';
import { gistReducer } from '../../reducers';

function Home() {

  const [gistState, gistDispatch] = useReducer(gistReducer);

  const setGists = (gist) => {
    gistDispatch({ type: SET_GIST, payload: gist})
  }

  const { doFetch: doGistsFetchRequest } = useFetch();
  
  const doGistsFetch = (username) => {
    doGistsFetchRequest({url: URLS.gists.replace("{username}", username), onSuccess: setGists, showSuccessNotification: true, successMessage: "Gists received successfully"});
  }

  const gists = gistState && gistState?.gists?.length > 0 ?
  gistState?.gists.map((gist, index) => (
      <Gist key={`${index}-${gist.id}`} gist={gist} />
    )) : <Col span={24}>No Gist Found</Col>

  return (
    <div>
      <Row gutter={[32, 32]}>
        <Col span={24}><Search search={doGistsFetch} /></Col>
      </Row>
      <Row gutter={[32, 32]}>
        {gists}
      </Row>
    </div>
  );
}

export default Home;
