import React from 'react';

import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { data } from '../public/data.json';

// const COLORS = ['green', 'volcano', 'geekblue', 'pink', 'red'];

const TableComponent:React.FC = () => {
  const [filterBy, setFilterBy] = React.useState([] as string[]);
  const handleClick = (tagName: string) => {
    if (!filterBy.includes(tagName)) {
      setFilterBy([...filterBy, tagName]);
    }
  }
  const handleDelete = (tagName: string) => {
    const filteredList = filterBy.filter((v) => v !== tagName);
    setFilterBy(filteredList);
  }
  const filterData = (filteredData: typeof data) => filteredData.filter(
    (v) => v.tags.filter((v1) => filterBy.includes(v1)).length === filterBy.length
  )
	return (
    <>
      {filterBy.map((v) => (
        <Chip color="secondary" clickable label={v} onDelete={() => handleDelete(v)}/>
      ))}
      <Paper elevation={0}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Summary</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Tags</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filterData(data).map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell component="th" scope="row">
                    <a href={row.url} target="_blank">{row.title}</a>
                  </TableCell>
                  <TableCell>{row.summary}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">
                    {row.tags.map((v) => <Chip color="secondary" clickable label={v} onClick={() => handleClick(v)}/>)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
	);
};

export default TableComponent;
