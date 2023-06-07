import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "60%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  fontSize: '20px'
};

const CreateTaskPopup = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = description;
    save(taskObj);
  };

  return (
    <Modal
      open={modal}
      onClose={toggle}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
      <form>
      <Typography variant="h1" style={{marginBottom: '2rem'}}>Create Task</Typography>

            <TextField
              fullWidth
              style={{ marginBottom: "20px" }}
              label="taskName"
              onChange={(e) => setTaskName(e.target.value)}
              value={taskName}
              name="taskName"
              color="secondary"
            />
            <br />
            <TextField
              fullWidth
              style={{ marginBottom: "10px"}}
              label="description"
              type="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              name="description"
              color="secondary"
            />
            <br /><br />
            </form>
        <Button color="info" variant="outlined" size="large" onClick={handleSave}>
          Create
        </Button>{" "}
        <Button color="error" variant="outlined" size="large" onClick={toggle}>
          Cancel
        </Button>
      </Box>
    </Modal>
    
  );
};

export default CreateTaskPopup;
