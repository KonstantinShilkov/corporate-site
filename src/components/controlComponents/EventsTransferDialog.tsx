import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";

interface AddEventsTransferDialogProps {
  open: boolean;
  handleClose: () => void;
}

const AddEventsTransferDialog: React.FC<AddEventsTransferDialogProps> = ({
  open,
  handleClose,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <div className="addEventsTransferDialog">
          <TextField
            fullWidth
            label="Enter FQDN"
            variant="outlined"
            size="small"
          />
          <TextField
            fullWidth
            label="Enter IP"
            variant="outlined"
            size="small"
          />
          <TextField
            fullWidth
            label="Protocol"
            variant="outlined"
            size="small"
          />
        </div>
      </DialogContent>
      <DialogActions className="eventsTransferDialogActions">
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

export default AddEventsTransferDialog;
