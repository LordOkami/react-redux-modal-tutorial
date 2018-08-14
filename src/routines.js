import { createRoutine } from "redux-saga-routines";

export const openModal = createRoutine("OPEN_MODAL");
export const closeModal = createRoutine("CLOSE_MODAL");
export const selectOption = createRoutine("SELECT_OPTION");
