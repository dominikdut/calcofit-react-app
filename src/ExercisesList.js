import React, {Component} from 'react';
import firebase from 'firebase'


class ExercisesList extends Component {

  state = {
    exercisesList: []
  };


  componentDidMount() {
    const userUid = firebase.auth().currentUser.uid;
    firebase.database().ref(`/exercisesPlan/${userUid}/${(this.props.date)}/exercises`).on(
      'value',
      snapshot => this.setState({
        exercisesList: Object.entries(snapshot.val() || {}).map(([id, value]) => ({
          id, ...value
        }))
      })
    )
  }


  render() {
    return (
      <div>
        <h1>Exercises</h1>
        <ul>
          {
            this.state.exercisesList.map(
              exercisesItem => (
                <li key={exercisesItem.id}>
                  {exercisesItem.name} ({exercisesItem.calories})

                </li>
              )
            )
          }
        </ul>
      </div>
    )
  }
}


export default ExercisesList