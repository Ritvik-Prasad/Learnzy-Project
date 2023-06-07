import React, { useState } from "react";
import EditTask from "../modals/EditTask";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";


const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);
  const navigate=useNavigate()

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#5D93E1",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#F9D288",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#5DC250",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#F48687",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#B964F7",
    },
  ];

  const toggle = () => {
    setModal(!modal);
    
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);

  };

  const handleDelete = () => {
    deleteTask(index);
  };

  return (
    <Box className="card-wrapper" style={{marginRight: '3rem'}}>
      <Box
        className="card-top"
        style={{ "backgroundColor": colors[index % 5].primaryColor }}
      ></Box>
      <Box className="task-holder">
        <span
          className="card-header"
          style={{
            "backgroundColor": colors[index % 5].secondaryColor,
            "borderRadius": "10px",
          }}
        >
          {taskObj.Name}
        </span>
        <p style={{marginTop: "3rem"}}>{taskObj.Description}</p>

        <Box style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <EditNoteOutlinedIcon
            style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }}
            onClick={() => setModal(true)}
          />
          <DeleteOutlineOutlinedIcon
            style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }}
            onClick={handleDelete}
          />
        </Box>
      </Box>
      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />
    </Box>
  );
};

export default Card;
