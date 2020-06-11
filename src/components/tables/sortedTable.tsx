import React, { useState, useEffect, CSSProperties } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import classnames from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    margin: `${theme.spacing(2)}px 0px`,
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

type Order = "desc" | "asc";

interface SortedTableProps<T> {
  data: T[];
  thead: { label?: string; sorted?: boolean; key: string }[];
  tbody: (e: T, key: any) => JSX.Element;
  sort: (collection: T[], order: Order, key: string) => T[];
  style?: CSSProperties;
  className?: string;
}

export default function SortedTable<T>(props: SortedTableProps<T>) {
  const classes = useStyles();
  const { data: array, thead, tbody, sort, className, ...other } = props;

  const [data, setData] = useState([...array]);
  const [order, setOrder] = useState<Order>("desc");
  const [key, setKey] = useState<string>("");

  const toggleOrder = (k: string) => {
    if (key === k) {
      setOrder(order === "asc" ? "desc" : "asc");
    } else {
      setKey(k);
    }
  };

  useEffect(() => {
    setData(sort(data, order, key));
  }, [order, key]);

  return (
    <Paper className={classnames(classes.paper, className)} {...other}>
      <TableContainer>
        <Table
          className={classes.table}
          aria-labelledby='tableTitle'
          size={"medium"}
          aria-label='enhanced table'
        >
          <TableHead>
            <TableRow>
              {thead.map((h) => (
                <TableCell
                  key={h.label || h.key}
                  // align={headCell.numeric ? 'right' : 'left'}
                  // padding={headCell.disablePadding ? 'none' : 'default'}
                  sortDirection={key === h.key ? order : false}
                >
                  {h.sorted ? (
                    <TableSortLabel
                      active={key === h.key}
                      direction={key === h.key ? order : "asc"}
                      onClick={() => toggleOrder(h.key)}
                    >
                      <b>{h.label || h.key}</b>
                      {key === h.key ? (
                        <span className={classes.visuallyHidden}>
                          {order === "desc"
                            ? "sorted descending"
                            : "sorted ascending"}
                        </span>
                      ) : null}
                    </TableSortLabel>
                  ) : (
                    <b>{h.label || h.key}</b>
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{data.map((row, index) => tbody(row, index))}</TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
