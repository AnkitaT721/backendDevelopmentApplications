import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  clearErrors,
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "./actions";
import { DELETE_TASK_RESET, EDIT_TASK_RESET } from "./constants";

function App() {
  const dispatch = useDispatch();

  const [task, setTask] = useState("");
  const [editMode, setEditMode] = useState(null);
  const [editedText, setEditedText] = useState("");

  const { tasks, error } = useSelector((state) => state.getTasks);
  const { error: updateError, isUpdated } = useSelector(
    (state) => state.editTask
  );
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteTask
  );

  const createTaskHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("task", task);

    dispatch(createTask(myForm));

    setTask("");

    dispatch(getAllTasks());
  };

  const deleteTaskHandler = (taskId) => {
    if (taskId) {
      dispatch(deleteTask(taskId));
    }
  };

  const editTaskHandler = (taskId, text) => {
    setEditMode(taskId);
    setEditedText(text);
  };

  const updateTaskHandler = (taskId, newTask) => {
    if (taskId && newTask) {
      dispatch(updateTask(taskId, { task: newTask }));
      setEditMode(null);
    }
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    if (updateError) {
      alert(updateError);
      dispatch(clearErrors());
    }
    if (deleteError) {
      alert(deleteError);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert("Task Updated Successfully");
      dispatch({ type: EDIT_TASK_RESET });
    }
    if (isDeleted) {
      alert("Task Deleted Successfully");
      dispatch({ type: DELETE_TASK_RESET });
    }
    dispatch(getAllTasks());
  }, [dispatch, error, updateError, deleteError, isUpdated, isDeleted]);

  return (
    <>
    <h1>To-Do List</h1>
      <form onSubmit={createTaskHandler} className="task-form">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" className="add-btn">Add Task</button>
      </form>
      <div className="task-list">
        {tasks &&
          tasks.map((task) => (
            <div key={task._id}>
              {editMode === task._id ? (
                <>
                  <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    className="text-input"
                  />
                  <button
                    onClick={() => updateTaskHandler(task._id, editedText)}
                    className="save-btn"
                  >
                    save
                  </button>
                </>
              ) : (
                <>
                  <span className="main-task">{task.task}</span>
                  <button onClick={() => editTaskHandler(task._id, task.task)}
                  className="edit-btn"
                  >
                    edit
                  </button>
                </>
              )}
              <button onClick={() => deleteTaskHandler(task._id)}
              className="dlt-btn"
              >
                delete
              </button>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;