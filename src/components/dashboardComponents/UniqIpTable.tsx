import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { v4 as uuidv4 } from "uuid";

interface RowData {
  ip: string;
  fqdn: string;
}

const createData = (ip: string, fqdn: string): RowData => {
  return { ip, fqdn };
};

const rows: RowData[] = [
  createData("192.168.8.8", "domen1"),
  createData("192.168.8.8", "domen2"),
  createData("192.168.8.8", "domen3"),
];

const UniqIpTable: React.FC = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ backgroundColor: "#dadada90", padding: "10px" }}>
              IP address
            </TableCell>
            <TableCell sx={{ backgroundColor: "#dadada90", padding: "10px" }}>
              Domen
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={uuidv4()}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ padding: "10px" }}>
                {row.ip}
              </TableCell>
              <TableCell sx={{ padding: "10px" }}>{row.fqdn}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UniqIpTable;
