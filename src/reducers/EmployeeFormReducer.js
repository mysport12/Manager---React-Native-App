import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_EDIT,
  EMPLOYEE_EDIT_CANCEL,
  EMPLOYEE_FIRED
 } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.label]: action.payload.value };
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case EMPLOYEE_EDIT:
      return INITIAL_STATE;
    case EMPLOYEE_EDIT_CANCEL:
      return INITIAL_STATE;
    case EMPLOYEE_FIRED:
      return INITIAL_STATE;
    default:
      return state;
  }
};
