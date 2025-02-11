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
  hostFqdn: string;
  hostIp: string;
  trap: string;
  port: string;
  status: string;
};

const rows: RowData[] = [
  createData("hostDomen", "192.168.0.1", "honeypot", "8080", "in progress"),
  createData("hostDomen", "192.168.0.1", "honeypot", "8080", "active"),
  createData("hostDomen", "192.168.0.1", "honeypot", "8080", "not active"),
];

function createData(
  hostFqdn: string,
  hostIp: string,
  trap: string,
  port: string,
  status: string
): RowData {
  return { hostFqdn, hostIp, trap, port, status };
}

const TrapsTable: React.FC = () => {
  return (
    <div>
      <TableContainer component={Paper} sx={{ minHeight: "500px" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: "#dadada90" }}>
                Host Domen
              </TableCell>
              <TableCell sx={{ backgroundColor: "#dadada90" }}>
                Host IP
              </TableCell>
              <TableCell sx={{ backgroundColor: "#dadada90" }}>
                Honeypot
              </TableCell>
              <TableCell sx={{ backgroundColor: "#dadada90" }}>Port</TableCell>
              <TableCell sx={{ backgroundColor: "#dadada90" }}>
                Status
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
                  {row.hostFqdn}
                </TableCell>
                <TableCell>{row.hostIp}</TableCell>
                <TableCell>{row.trap}</TableCell>
                <TableCell>{row.port}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TrapsTable;
