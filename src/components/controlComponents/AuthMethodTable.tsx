import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import React from "react";
import { v4 as uuidv4 } from "uuid";

type RowData = {
  name: string;
  method: string;
  timeCreation: string;
  timeLastInUse: string;
};

const rows: RowData[] = [
  createData(
    "NameNameName",
    "ssh logopass or key",
    "15:15 01.01.2025",
    "23:17 02.02.2025"
  ),
  createData(
    "NameNameName",
    "ssh logopass or key",
    "15:15 01.01.2025",
    "23:17 02.02.2025"
  ),
  createData(
    "NameNameName",
    "ssh logopass or key",
    "15:15 01.01.2025",
    "23:17 02.02.2025"
  ),
];

function createData(
  name: string,
  method: string,
  timeCreation: string,
  timeLastInUse: string
): RowData {
  return { name, method, timeCreation, timeLastInUse };
}

const AuthMethodTable: React.FC = () => {
  return (
    <div>
      <TableContainer component={Paper} sx={{ minHeight: "500px" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: "#dadada90" }}>Name</TableCell>
              <TableCell sx={{ backgroundColor: "#dadada90" }}>
                Method (ssh logopass/key)
              </TableCell>
              <TableCell sx={{ backgroundColor: "#dadada90" }}>
                Creation Time
              </TableCell>
              <TableCell sx={{ backgroundColor: "#dadada90" }}>
                Time of last use
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={uuidv4()}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.method}</TableCell>
                <TableCell>{row.timeCreation}</TableCell>
                <TableCell>{row.timeLastInUse}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AuthMethodTable;
