import React, { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import { Button } from "@mui/material";
import NotificationsTable from "@/components/controlComponents/NotificationsTable";
import AddNotificationsDialog from "@/components/controlComponents/NotificationsDialog";

const Notifications: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <MainLayout>
      <div className="notifications__container">
        <div className="addNotificationsButton">
          <Button
            sx={{
              color: "white",
              width: "110px",
              fontSize: "18px",
              backgroundColor: "black",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              },
            }}
            onClick={handleClickOpen}
          >
            Add
          </Button>
        </div>
        <div className="notificationsTable">
          <NotificationsTable />
        </div>
      </div>
      <AddNotificationsDialog open={open} handleClose={handleClose} />
    </MainLayout>
  );
};

export default Notifications;
