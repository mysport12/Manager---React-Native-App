import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_FETCH_SUCCESS,
  EMPLOYEE_EDIT,
  EMPLOYEE_EDIT_CANCEL,
  EMPLOYEE_FIRED
} from './types';

export const employeeUpdate = ({ label, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { label, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_CREATE });
      Actions.employeeList({ type: 'reset' });
    });
  };
};

export const employeeFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .on('value', snapshot => {
      dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const employeeEdit = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
    .set({ name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_EDIT });
      Actions.employeeList({ type: 'reset' });
    });
  };
};

export const employeeEditCancel = () => {
  return {
    type: EMPLOYEE_EDIT_CANCEL,
    payload: {}
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        dispatch({ type: EMPLOYEE_FIRED });
        Actions.employeeList({ type: 'reset' });
    });
  };
};
