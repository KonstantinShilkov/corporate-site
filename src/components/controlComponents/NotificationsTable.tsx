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
  email: string;
  tg: string;
};

const rows: RowData[] = [
  createData("dsf@wede.com", "tg Name"),
  createData("dsf@wede.com", "tg Name"),
  createData("dsf@wede.com", "tg Name"),
];

function createData(email: string, tg: string): RowData {
  return { email, tg };
}

const NotificationsTable: React.FC = () => {
  return (
    <div>
      <TableContainer component={Paper} sx={{ minHeight: "500px" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: "#dadada90" }}>
                Email address
              </TableCell>
              <TableCell sx={{ backgroundColor: "#dadada90" }}>
                Telegram Username
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
                  {row.email}
                </TableCell>
                <TableCell>{row.tg}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default NotificationsTable;
