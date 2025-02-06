import MainLayout from "@/layouts/MainLayout";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";
import UniqIpTable from "@/components/dashboardComponents/UniqIpTable";
import ActiveTrapsTable from "@/components/dashboardComponents/ActiveTrapsTable";
import ScansTable from "@/components/dashboardComponents/ScansTable";
import ExploitsTable from "@/components/dashboardComponents/ExploitsTable";
import AuthAttemptsTable from "@/components/dashboardComponents/AuthAttemptsTable";

const Honeypots = ["trap1", "trap2", "trap3", "Áll"];

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="dashboard">
        <div className="dashboard__container1">
          <div className="allTraps">
            <Autocomplete
              disablePortal
              disableClearable
              options={Honeypots}
              sx={{ width: 200 }}
              renderInput={(params) => (
                <TextField {...params} label="Honeypots" />
              )}
            />
          </div>
          <div className="period">
            <TextField label="Reflection Period " variant="outlined" />
          </div>
        </div>
        <div className="dashboard__container2">
          <div className="allEvents">
            <TextField
              disabled
              label="Total Events  "
              variant="outlined"
              sx={{ height: 214, "& .MuiInputBase-root": { height: "100%" } }}
            />
          </div>
          <div className="uniqIp">
            <UniqIpTable />
          </div>
          <div className="activeTraps">
            <ActiveTrapsTable />
          </div>
        </div>
        <div className="dashboard__container3">
          <div className="scans">
            <ScansTable />
          </div>
          <div className="exploits">
            <ExploitsTable />
          </div>
          <div className="authAttempt">
            <AuthAttemptsTable />
          </div>
        </div>
        <div className="dashboard__container4">
          <div className="eventsMap">Events Map</div>
        </div>
      </div>
    </MainLayout>
  );
}
