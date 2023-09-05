import {
    CLEAR_ERRORS,
    CREATE_TASK_FAIL,
    CREATE_TASK_REQUEST,
    CREATE_TASK_RESET,
    CREATE_TASK_SUCCESS,
    DELETE_TASK_FAIL,
    DELETE_TASK_REQUEST,
    DELETE_TASK_RESET,
    DELETE_TASK_SUCCESS,
    EDIT_TASK_FAIL,
    EDIT_TASK_REQUEST,
    EDIT_TASK_RESET,
    EDIT_TASK_SUCCESS,
    GET_TASKS_FAIL,
    GET_TASKS_REQUEST,
    GET_TASKS_SUCCESS,
  } from "./constants";
  
  export const addTaskReducer = (state = { task: {} }, action) => {
    switch (action.type) {
      case CREATE_TASK_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case CREATE_TASK_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          task: action.payload.task,
        };
      case CREATE_TASK_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case CREATE_TASK_RESET:
        return {
          ...state,
          success: false,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
  
  
  //get tasks
  export const getTasksReducer = (state = { tasks: [] }, action) => {
    switch (action.type) {
      case GET_TASKS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_TASKS_SUCCESS:
        return {
          loading: false,
          tasks: action.payload.tasks,
        };
      case GET_TASKS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
  
  //edit task
  export const editTaskReducer = (state = {}, action) => {
    switch (action.type) {
      case EDIT_TASK_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case EDIT_TASK_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
      case EDIT_TASK_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case EDIT_TASK_RESET:
        return {
          ...state,
          isUpdated: false,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
  
  //delete task
  export const deleteTaskReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_TASK_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case DELETE_TASK_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
  
      case DELETE_TASK_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case DELETE_TASK_RESET:
        return {
          ...state,
          isDeleted: false,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };