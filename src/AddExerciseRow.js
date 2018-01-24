import React, {Component, Fragment} from 'react';
import {Form, Icon} from 'semantic-ui-react'

class AddExerciseRow extends Component {
  state = {
    name: '',
    caloriesBurnt: 0
  };

  onClick = () => {
    this.props.onNewExerciseAdded(this.state);
    this.setState({
      name: '',
      caloriesBurnt: ''
    })
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <Fragment>

        <tr>
          <td>
            <Form.Input
              onChange={this.handleChange}
              value={this.state.name}
              name='name'
              required
              minlength = '1'
              type='text'
            />
          </td>
          <td>
            <Form.Input
              type="number"
              min="1"
              onChange={this.handleChange}
              value={this.state.caloriesBurnt}
              name='caloriesBurnt'
              required
            />
          </td>
          <td>
            <Icon
              size='large'
              color='black'
              name='add'
              onClick={this.onClick}>
            </Icon>
          </td>
        </tr>

      </Fragment>
    )
  }
}

export default AddExerciseRow;