import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

const activeTrapsRows = [
  createDataActiveTraps("192.168.8.8", "8080", "iphone", "someserv"),
  createDataActiveTraps("192.168.8.8", "8080", "iphone", "someserv"),
  createDataActiveTraps("192.168.8.8", "8080", "iphone", "someserv"),
];

function createDataActiveTraps(
  ip: string,
  port: string,
  hostname: string,
  service: string
) {
  return { ip, port, hostname, service };
}

export default function ActiveTrapsTable() {
  return (
    <div>
      <TableContainer component={Paper} sx={{ backgroundColor: "#e9f9f0" }}>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: "#ddeee5" }}>
                IP address
              </TableCell>
              <TableCell sx={{ backgroundColor: "#ddeee5" }}>Port</TableCell>
              <TableCell sx={{ backgroundColor: "#ddeee5" }}>
                Hostname
              </TableCell>
              <TableCell sx={{ backgroundColor: "#ddeee5" }}>Service</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activeTrapsRows.map((row) => (
              <TableRow
                key={row.ip}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.ip}
                </TableCell>
                <TableCell>{row.port}</TableCell>
                <TableCell>{row.hostname}</TableCell>
                <TableCell>{row.service}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
