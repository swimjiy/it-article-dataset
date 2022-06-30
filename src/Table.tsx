import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import { COLORS } from './metaColors';
import { data } from '../public/data.json';

const useStyles = makeStyles((theme) => ({
  chipWrapper: {
    marginBottom: theme.spacing(2),
  },
  chip: {
    color: theme.palette.common.white,
    margin: theme.spacing(0.5),
  },
  rowBgDark: {
    background: '#F9FAFB',
  },
}));

type Order = 'asc' | 'desc';

interface HeadCell {
  id: keyof typeof data[0];
  label: string;
  numeric: boolean;
}

const TableComponent:React.FC = () => {
  const classes = useStyles();
  const headCells: HeadCell[] = [
    { id: 'id', numeric: false, label: 'No' },
    { id: 'title', numeric: false, label: 'Title' },
    { id: 'summary', numeric: false, label: 'Summary' },
    { id: 'date', numeric: true, label: 'Date' },
    { id: 'tags', numeric: true, label: 'Tags' },
  ];

  const [filterBy, setFilterBy] = React.useState([] as string[]);
  const [order, setOrder] = React.useState<Order>('desc');
  const [orderBy, setOrderBy] = React.useState<keyof typeof data[0]>('id');
  const handleClick = (tagName: string) => {
    if (!filterBy.includes(tagName)) {
      setFilterBy([...filterBy, tagName]);
    }
  }
  const findColor = (value: string) => `#${COLORS.find((v) => v.name === value)?.color}`;
  const handleDelete = (tagName: string) => {
    const filteredList = filterBy.filter((v) => v !== tagName);
    setFilterBy(filteredList);
  }

  const sortData = (rawData: typeof data) => {
    const filteredData = rawData.filter((v) => v.tags.filter((v1) => filterBy.includes(v1)).length === filterBy.length);
    const sortedData = filteredData.sort((a, b) => {
      const flag = order === 'asc' ? -1 : 1;
      if (orderBy === 'id') return (a[orderBy] - b[orderBy]) * flag;
      else if (orderBy === 'tags') return (a[orderBy][0].localeCompare(b[orderBy][0])) * flag;
      return (a[orderBy].localeCompare(b[orderBy])) * flag;
    })
    return sortedData;
  }

  const handleSort = (property: keyof typeof data[0]) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  }
	return (
    <>
      <Box className={classes.chipWrapper}>
        {filterBy.map((v) => (
          <Chip
            style={{ background: findColor(v) }}
            clickable
            label={v.toUpperCase()}
            className={classes.chip}
            onDelete={()=> handleDelete(v)}
          />
        ))}
      </Box>
      <Paper elevation={0}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell
                    align={headCell.numeric ? 'right' : 'left'}
                    sortDirection={orderBy === headCell.id ? order : false}
                  >
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : 'asc'}
                      onClick={() => handleSort(headCell.id)}
                    >
                      {headCell.label}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {sortData(data).map((row, idx) => (
                <TableRow key={row.id} className={(idx % 2 === 1) ? classes.rowBgDark : ''}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell component="th" scope="row">
                    <a href={row.url} target="_blank" rel="noopener noreferrer">{row.title}</a>
                  </TableCell>
                  <TableCell>{row.summary}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">
                    {row.tags.map((v) => (
                      <Chip
                        style={{ background: findColor(v) }}
                        clickable
                        label={v.toUpperCase()}
                        className={classes.chip}
                        onClick={() => handleClick(v)}
                      />
                    ))}
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
