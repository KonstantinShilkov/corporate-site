import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Autocomplete,
} from "@mui/material";

interface AddTrapDialogProps {
  open: boolean;
  handleClose: () => void;
}

const honeypotOptions = ["Honeypot 1", "Honeypot 2", "Honeypot 3"];
const authDataOptions = ["Auth Data 1", "Auth Data 2", "Auth Data 3"];

const AddTrapDialog: React.FC<AddTrapDialogProps> = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Trap</DialogTitle>
      <DialogContent>
        <div className="addTrapDialog">
          <TextField
            fullWidth
            label="Enter Host"
            variant="outlined"
            size="small"
          />
          <Autocomplete
            options={honeypotOptions}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose Honeypot for Deployment"
                size="small"
              />
            )}
          />
          <Autocomplete
            options={authDataOptions}
            renderInput={(params) => (
              <TextField {...params} label="Choose Auth Data" size="small" />
            )}
          />
        </div>
      </DialogContent>
      <DialogActions className="trapDialogActions">
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

export default AddTrapDialog;
