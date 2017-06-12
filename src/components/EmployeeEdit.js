import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';
import { Card, CardSection, Button, ConfirmModal } from './common';
import { employeeEdit, employeeUpdate, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ label: prop, value });
    });
  }

  onTextButtonPress() {
    const { phone, shift } = this.props;
    text(phone, `Your upcoming shift is on ${shift}.`);
  }

  onSaveButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeEdit({ name, phone, shift, uid: this.props.employee.uid });
  }

  onFireButtonPress() {
    this.setState({ showModal: !this.state.showModal });
  }

  onAccept() {
    const { uid } = this.props.employee;
    this.props.employeeDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPress={this.onSaveButtonPress.bind(this)}>
            Save
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextButtonPress.bind(this)}>
            Text Employee
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onFireButtonPress.bind(this)}>
            Fire Employee
          </Button>
        </CardSection>

        <ConfirmModal
          visible={this.state.showModal}
          onDecline={this.onDecline.bind(this)}
          onAccept={this.onAccept.bind(this)}
        >
          Are you sure you want to fire {this.props.name}?
        </ConfirmModal>

      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeEdit, employeeUpdate, employeeDelete })(EmployeeEdit);
