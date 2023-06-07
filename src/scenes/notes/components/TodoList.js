import React, { useEffect, useState } from "react";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";
import { tokens } from "../../../theme";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Button from '@mui/material/Button';


const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  useEffect(() => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    //window.location.reload()
    navigate("/notes");
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    //window.location.reload(true)
    navigate("/notes");
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(taskList);
    setModal(false);
  };

  return (
    <>
      <Box
        className='header'
        style={{textAlign: 'center',
        justifyContent: 'center'}}
      >
        <Typography variant="h1" style={{marginBottom: '2rem'}}>LearNote. Stay Organized Effortlessly.</Typography>
        
        <Button style={{fontSize:"20px"}} variant="contained" color="info" size="large" onClick={() => setModal(true)}>Create Task</Button>
        {/* <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Task
        </button> */}
      </Box>
      <Box className="task-container">
        {taskList &&
          taskList.map((obj, index) => (
            <Card
              taskObj={obj}
              index={index}
              deleteTask={deleteTask}
              updateListArray={updateListArray}
            />
          ))}
      </Box>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TodoList;
