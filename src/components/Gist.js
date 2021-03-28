import React, { useState } from "react";
import { Col, Card, Collapse, Descriptions, Tag } from 'antd';
import Fork from "./Fork";
import { getUIDate } from "../utils/helpers";
const { Panel } = Collapse;

const Gist = ({ gist }) => {
    const [selectedGist, setSelectedGist] = useState();

    const { 
        owner: { login, avatar_url },
        created_at,
        id,
        url,
        comments,
        public: isPublic,
        files,
    } = gist;

    const getForks = id => setSelectedGist(id);

    return (
        <Col span={8}>
            <Card
                title={login} 
                bordered={true}
                cover={<img alt="example" src={avatar_url} />}
            >
                <Descriptions
                    title="Gist Info"
                    size="middle"
                    layout="vertical"
                    bordered
                >
                    <Descriptions.Item label="Id" span={3}>{id}</Descriptions.Item>
                    <Descriptions.Item label="Url" span={3}>{url}</Descriptions.Item>
                    <Descriptions.Item label="Comments" span={2}>{comments}</Descriptions.Item>
                    <Descriptions.Item label="Account">{isPublic ? "Public" : "Private"}</Descriptions.Item>
                    <Descriptions.Item label="Date Created">{getUIDate(created_at)}</Descriptions.Item>
                    <Descriptions.Item label="Files" span={3}>{
                        Object.keys(files).map((key, i) => <>File: {key}<br/>Type: <Tag key={i} color="green">{files[key].type}</Tag></>)
                    }</Descriptions.Item>
                </Descriptions>
            </Card>
            <Collapse onChange={() => getForks(id)}>
                <Panel header="Forks" key="1">
                    {selectedGist === id && <Fork id={id}></Fork>}
                </Panel>
            </Collapse>
        </Col>
    );
};

export default Gist;
