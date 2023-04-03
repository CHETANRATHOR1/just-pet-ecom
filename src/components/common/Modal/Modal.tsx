import React, { ReactChildren, ReactNode } from "react";
import "./Modal.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputField from "../InputField/InputField";
import { pink } from "@mui/material/colors";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import CommonButton from "../Button/CommonButton";

interface ParentProps {
  children: ReactNode;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CommonModal = (prop:ParentProps) => {
  console.log();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <div>
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box  sx={style} className="modal__main">
           {prop.children}
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default CommonModal;
