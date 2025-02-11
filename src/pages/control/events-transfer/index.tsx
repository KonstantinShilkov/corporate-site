import React, { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import { Button } from "@mui/material";
import EventsTransferTable from "@/components/controlComponents/EventsTransferTable";
import AddEventsTransferDialog from "@/components/controlComponents/EventsTransferDialog";

const EventsTransfer: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <MainLayout>
      <div className="eventsTransfer__container">
        <div className="addEventsTransferButton">
          <Button
            sx={{
              color: "white",
              fontSize: "18px",
              backgroundColor: "black",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              },
            }}
            onClick={handleClickOpen}
          >
            Add Method
          </Button>
        </div>
        <div className="eventsTransferTable">
          <EventsTransferTable />
        </div>
      </div>
      <AddEventsTransferDialog open={open} handleClose={handleClose} />
    </MainLayout>
  );
};

export default EventsTransfer;
