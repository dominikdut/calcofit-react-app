import React, {Component} from 'react';
import firebase from "firebase/index";
import {Icon} from 'semantic-ui-react'


class ExercisesRow extends Component {

  handleRemoveClick = event => {
    const exerciseId = event.target.dataset.exerciseId;
    const userUid = firebase.auth().currentUser.uid;
    firebase.database().ref(`/exercises/${userUid}/${exerciseId}`).set(null)
  };

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.caloriesBurnt}</td>
        <td>
          <Icon size='large' color='black' name='trash'
                data-exercise-id={this.props.id}
                onClick={this.handleRemoveClick}>
          </Icon>
        </td>
      </tr>
    )
  }
}

export default ExercisesRow;