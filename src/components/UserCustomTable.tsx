import React from 'react';
import { Layout, Typography } from 'antd';
import Table from './Table';

interface IUserCustomTable {
	config: {
    username: string;
    title: string;
    subscription: string;
    columns: string[];
    tags?: string[];
	}
	data: {
    key: number;
    title: string;
    summary: string;
    updateAt: string;
    tags: string[];
	}[]
}

const UserCustomTable: React.FC<IUserCustomTable> = ({ config, data }) => {
	const { Title, Text } = Typography;
	const { Header, Footer, Content } = Layout;
	const { username, title, subscription, columns, tags } = config;

	console.log(username, title)
	return (
		<Layout>
      <Header>Header</Header>
      <Content style={{ padding: '24px', minHeight: 280 }}>
        <Title>{title}</Title>
        <Text type="secondary">{subscription}</Text>
        <Table columns={columns} tags={tags} data={data} />
      </Content>
      <Footer>© 2020 Swimjiy</Footer>
    </Layout>
	);
}

export default UserCustomTable;
