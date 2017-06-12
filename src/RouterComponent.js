import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import { employeeEditCancel } from './actions';

class RouterComponent extends Component {
  render() {
    return (
      <Router sceneStyle={{ paddingTop: 65 }}>
        <Scene key='auth'>
          <Scene
            key='login'
            component={LoginForm}
            title='Login'
          />
        </Scene>
        <Scene key='main'>
          <Scene
            onRight={() => Actions.employeeNew()}
            rightTitle='Add'
            key='employeeList'
            component={EmployeeList}
            title='Employees'
            initial
          />
          <Scene
            key='employeeNew'
            component={EmployeeCreate}
            title='Create Employee'
          />

          <Scene
            key='employeeDetails'
            component={EmployeeEdit}
            title='Employee Details'
            onBack={() => {
              this.props.employeeEditCancel();
              Actions.pop();
            }
          }
          />

        </Scene>
      </Router>
    );
  }
}

export default connect(null, { employeeEditCancel })(RouterComponent);
