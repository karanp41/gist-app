import React, { useEffect, useReducer } from "react";
import { URLS } from "../constants";
import { SET_FORK } from "../actions";
import { forkReducer } from "../reducers";
import { useFetch } from "../hooks";
import { Card, Avatar } from "antd";
const { Meta } = Card;

const Fork = ({ id }) => {
    
    const { doFetch: doForkFetchRequest } = useFetch();
    const doForkFetch = (forkId) => {
        doForkFetchRequest({url: URLS.fork.replace("{forkId}", forkId), onSuccess: setForks});
    }

    useEffect(() => {
        doForkFetch(id);
    }, [])

    const [forkState, forkDispatch] = useReducer(forkReducer);
    const setForks = (forks) => {
        forkDispatch({ type: SET_FORK, payload: forks})
    }

    const forks = forkState && forkState?.forks?.length > 0 ?
    forkState?.forks.map((fork, index) => (
        <Card key={`${index}-${fork.id}`}>
            <Meta
                avatar={<Avatar src={fork.owner.avatar_url} />}
                title= {fork.owner.login}
                description={fork.owner.url}
                />
        </Card>
        )) : <p>No Fork Found</p>
    
    return (
        <>
            {forks}
        </>
    );
};

export default Fork;
