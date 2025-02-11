import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";

interface AddAuthMethodDialogProps {
  open: boolean;
  handleClose: () => void;
}

const AddAuthMethodDialog: React.FC<AddAuthMethodDialogProps> = ({
  open,
  handleClose,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <div className="addAuthMethodDialog">
          <TextField
            fullWidth
            label="Enter name"
            variant="outlined"
            size="small"
          />
          <TextField
            fullWidth
            label="Enter method"
            variant="outlined"
            size="small"
          />
          <TextField
            fullWidth
            label="Login$Password or key"
            variant="outlined"
            size="small"
          />
        </div>
      </DialogContent>
      <DialogActions className="authMethodDialogActions">
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

export default AddAuthMethodDialog;
