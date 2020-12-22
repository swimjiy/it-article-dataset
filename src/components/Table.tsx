import React from 'react';
import { Table, Tag } from 'antd';

interface ITableComponent {
  data: {
    key: number;
    title: string;
    summary: string;
    updateAt: string;
    tags: string[];
  }[],
  columns: string[],
  tags?: string[]
}

const COLORS = ["green", "volcano", "geekblue", "pink", "red", "yellow", "orange", "cyan", "blue", "purple", "magenta", "gold", "lime"]

const TableComponent:React.FC<ITableComponent> = ({ data, columns }) => {
  const tableColumns = columns.map((v) => {
    if (v === 'Tags') {
      return {
        title: v,
        dataIndex: v.toLowerCase(),
        key: v.toLowerCase(),
        render: (tags: string[]) => (
          <>
            {tags.map((tag, idx) => (
              <Tag color={COLORS[idx]} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            ))}
          </>
        ),
      };
    }
    return {
      title: v,
      dataIndex: v.toLowerCase(),
      key: v.toLowerCase(),
      render: (text: string) => text,
    };
  });
	return (
		<Table columns={tableColumns} dataSource={data} />
	);
};

export default TableComponent;
