import axios from "axios";
import {
  CLEAR_ERRORS,
  CREATE_TASK_FAIL,
  CREATE_TASK_REQUEST,
  CREATE_TASK_SUCCESS,
  DELETE_TASK_FAIL,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  EDIT_TASK_FAIL,
  EDIT_TASK_REQUEST,
  EDIT_TASK_SUCCESS,
  GET_TASKS_FAIL,
  GET_TASKS_REQUEST,
  GET_TASKS_SUCCESS,
} from "./constants";

//create task
export const createTask = (taskData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_TASK_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(`/api/v1/addtask`, taskData, config);

    dispatch({
      type: CREATE_TASK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_TASK_FAIL,
      payload: error.response.data.message,
    });
  }
};

//get tasks
export const getAllTasks = () => async (dispatch) => {
  try {
    dispatch({ type: GET_TASKS_REQUEST });

    const { data } = await axios.get(`/api/v1/gettasks`);

    dispatch({
      type: GET_TASKS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_TASKS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//update task
export const updateTask = (id, taskData) => async (dispatch) => {
  try {
    dispatch({ type: EDIT_TASK_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/updatetask/${id}`,
      taskData,
      config
    );

    dispatch({
      type: EDIT_TASK_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: EDIT_TASK_FAIL,
      payload: error.response.data.message,
    });
  }
};

//delete task
export const deleteTask = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_TASK_REQUEST });

    const { data } = await axios.delete(`/api/v1/deletetask/${id}`);

    dispatch({
      type: DELETE_TASK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_TASK_FAIL,
      payload: error.response.data.message,
    });
  }
};

//clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};