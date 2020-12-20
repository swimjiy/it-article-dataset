import React from 'react';
import { Table, Tag } from 'antd';

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (text: string) => text,
  },
  {
    title: 'Summary',
    dataIndex: 'summary',
    key: 'summary',
    render: (text: string) => text,
  },
  {
    title: 'UpdateAt',
    dataIndex: 'updateAt',
    key: 'updateAt',
    render: (text: string) => text,
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: string[]) => (
      <>
        {tags.map(tag => {
          let color = 'green';
          switch (tag) {
            case 'javaScript':
              color = 'yello';
              break;
            case 'front-end':
              color = 'volcano';
              break;
            case 'IT':
              color = 'geekblue';
              break;
            default:
              break;
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

const data = [
  {
    key: '1',
    title: 'JavaScript와 ECMAScript는 무슨 차이점이 있을까?',
    summary: '글에서는 ECMA와 ECMAScript를 설명하고, Javascript와 ES가 어떤 접점을 갖고 있는지 쉬운 예시를 들어 설명하고 있습니다. 저처럼 평소에 별 생각 없이 ES6를 쓰고 계시거나, ECMA에 대해 평소 궁금했던 분들께 추천 드립니다!',
    updateAt: '2020-12-20',
    tags: ['javaScript', 'front-end'],
  },
  {
    key: '2',
    title: '소프트웨어 학습 태도',
    summary: '개발을 하는 데 필요한 마음가짐에 대해 이야기하고 있습니다. 단순한 명제들일 수 있으나 은근 이런 당연한 것들을 잊고 코드를 짜게 되어 한 번 리마인드하는 데 추천합니다.',
    updateAt: '2020-12-20',
    tags: ['IT'],
  },
  {
    key: '3',
    title: '2020년과 이후 JavaScript의 동향 - JavaScript(ECMAScript)',
    summary: '2020년 시점에서 JavaScript를 중심으로 오가고 있는 다양한 이슈들(크로스 브라우징, TypeScript 등) 대해 간략히 정리하고, ECMAScript2020에서 새로 추가된 스펙들과 앞으로 추가될 명세들을 한눈에 확인할 수 있습니다.',
    updateAt: '2020-12-21',
    tags: ['javaScript', 'front-end'],
  },
];

const TableComponent:React.FC = () => {
	return (
		<Table columns={columns} dataSource={data} />
	);
};

export default TableComponent;
