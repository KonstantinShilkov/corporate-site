import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";

interface AddNotificationsDialogProps {
  open: boolean;
  handleClose: () => void;
}

const AddNotificationsDialog: React.FC<AddNotificationsDialogProps> = ({
  open,
  handleClose,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <div className="addNotificationsDialog">
          <TextField
            fullWidth
            label="Enter Email"
            variant="outlined"
            size="small"
          />
          <TextField
            fullWidth
            label="Enter Telegram"
            variant="outlined"
            size="small"
          />
        </div>
      </DialogContent>
      <DialogActions className="notificationsDialogActions">
        <Button onClick={handleClose} sx={{ color: "black" }}>
          Cancel
        </Button>
        <Button
          type="button"
          variant="contained"
          sx={{ color: "white", backgroundColor: "black" }}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddNotificationsDialog;
