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
  fqdn: string;
  ip: string;
  protocol: string;
};

const rows: RowData[] = [
  createData("Domendomen", "192.168.0.1", "Protocolprotocol"),
  createData("Domendomen", "192.168.0.1", "Protocolprotocol"),
  createData("Domendomen", "192.168.0.1", "Protocolprotocol"),
];

function createData(fqdn: string, ip: string, protocol: string): RowData {
  return { fqdn, ip, protocol };
}

const EventsTransferTable: React.FC = () => {
  return (
    <div>
      <TableContainer component={Paper} sx={{ minHeight: "500px" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: "#dadada90" }}>FQDN</TableCell>
              <TableCell sx={{ backgroundColor: "#dadada90" }}>
                IP address{" "}
              </TableCell>
              <TableCell sx={{ backgroundColor: "#dadada90" }}>
                Protocol of Transfer
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
                  {row.fqdn}
                </TableCell>
                <TableCell>{row.ip}</TableCell>
                <TableCell>{row.protocol}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default EventsTransferTable;
