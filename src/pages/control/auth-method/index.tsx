import React, { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import { Button } from "@mui/material";
import AuthMethodTable from "@/components/controlComponents/AuthMethodTable";
import AddAuthMethodDialog from "@/components/controlComponents/AuthMethodDialog";

const AuthMethod: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <MainLayout>
      <div className="authMethod__container">
        <div className="addAuthMethodButton">
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
        <div className="authMethodTable">
          <AuthMethodTable />
        </div>
      </div>
      <AddAuthMethodDialog open={open} handleClose={handleClose} />
    </MainLayout>
  );
};

export default AuthMethod;
