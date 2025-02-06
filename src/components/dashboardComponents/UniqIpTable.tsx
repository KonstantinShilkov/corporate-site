import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

const rows = [
  createData("192.168.8.8", "domen1"),
  createData("192.168.8.8", "domen2"),
  createData("192.168.8.8", "domen3"),
];
function createData(ip: string, fqdn: string) {
  return { ip, fqdn };
}

export default function UniqIpTable() {
  return (
    <div>
      <TableContainer component={Paper} sx={{ backgroundColor: "#e9f9f0" }}>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: "#ddeee5" }}>
                IP address
              </TableCell>
              <TableCell sx={{ backgroundColor: "#ddeee5" }}>Domen</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.ip}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.ip}
                </TableCell>
                <TableCell>{row.fqdn}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
