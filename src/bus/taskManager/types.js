export const types = Object.freeze({
    // Sync
    TASK_MANAGER_SELECT_TASK: 'TASK_MANAGER_SELECT_TASK',
    TASK_MANAGER_FILL_TASKS: 'TASK_MANAGER_FILL_TASKS',
    TASK_MANAGER_START_FETCHING: 'TASK_MANAGER_START_FETCHING',
    TASK_MANAGER_STOP_FETCHING: 'TASK_MANAGER_STOP_FETCHING',
    TASK_MANAGER_SET_FETCHING_ERROR: 'TASK_MANAGER_SET_FETCHING_ERROR',
    // Async
    TASK_MANAGER_FETCH_TASKS_ASYNC: 'TASK_MANAGER_FETCH_TASKS_ASYNC',
    TASK_MANAGER_CREATE_TASK_ASYNC: 'TASK_MANAGER_CREATE_TASK_ASYNC',
    TASK_MANAGER_UPDATE_TASK_ASYNC: 'TASK_MANAGER_UPDATE_TASK_ASYNC',
    TASK_MANAGER_REMOVE_TASK_ASYNC: 'TASK_MANAGER_REMOVE_TASK_ASYNC',
});
