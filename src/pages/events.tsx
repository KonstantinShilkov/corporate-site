import MainLayout from "@/layouts/MainLayout";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";
import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Button } from "@mui/material";

const Indices: string[] = ["index1", "index2", "index3"];

const Events: React.FC = () => {
  const [timeFrom, setTimeFrom] = React.useState<Dayjs | null>(
    dayjs("2025-01-01T15:30")
  );

  const [timeTo, setTimeTo] = React.useState<Dayjs | null>(
    dayjs("2025-01-01T15:30")
  );
  return (
    <MainLayout>
      <div className="events__container">
        <div className="menuBar"> Menu + NEW SAVE OPEN etc</div>
        <div className="filterSettingsBar">
          <div className="indicesList">
            <Autocomplete
              disablePortal
              disableClearable
              options={Indices}
              sx={{
                width: " 400px",
                "& .MuiOutlinedInput-root": {
                  "&:hover": {
                    borderColor: "black",
                  },
                  "&.Mui-focused": {
                    borderColor: "black",
                  },
                },
                "& .MuiInputLabel-root": {
                  "&.Mui-focused": {
                    color: "black",
                  },
                },
              }}
              renderInput={(params) => <TextField {...params} label="Index" />}
            />
          </div>
          <div className="periodInput">
            <div className="timeFrom">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="From"
                  value={timeFrom}
                  onChange={(newValue) => setTimeFrom(newValue)}
                />
              </LocalizationProvider>
            </div>
            <div className="timeTo">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="To"
                  value={timeTo}
                  onChange={(newValue) => setTimeTo(newValue)}
                />
              </LocalizationProvider>
            </div>
            <div className="buttonUpdate">
              <Button
                sx={{
                  color: "white",
                  fontSize: "18px",
                  backgroundColor: "black",
                  width: "110px",
                  height: "56px",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                  },
                }}
              >
                Update
              </Button>
            </div>
          </div>
        </div>
        <div className="filterContainer">
          <div className="filterBar"></div>
          <div className="filterResults"></div>
        </div>
      </div>
    </MainLayout>
  );
};
export default Events;
