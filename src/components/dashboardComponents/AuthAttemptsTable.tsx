import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

const activeTrapsRows = [
  createDataActiveTraps("192.168.8.8", "domen", "honeypot", "8080"),
  createDataActiveTraps("192.168.8.8", "domen", "honeypot", "8080"),
  createDataActiveTraps("192.168.8.8", "domen", "honeypot", "8080"),
];

function createDataActiveTraps(
  ip: string,
  fqdn: string,
  trap: string,
  port: string
) {
  return { ip, fqdn, trap, port };
}

export default function AuthAttemptsTable() {
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
              <TableCell sx={{ backgroundColor: "#ddeee5" }}>
                Honeypot
              </TableCell>
              <TableCell sx={{ backgroundColor: "#ddeee5" }}>Port</TableCell>
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
                <TableCell>{row.fqdn}</TableCell>
                <TableCell>{row.trap}</TableCell>
                <TableCell>{row.port}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
