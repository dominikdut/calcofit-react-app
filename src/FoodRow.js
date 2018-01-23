import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react'

class FoodRow extends Component {

  handleRemoveClick = event => {
    const foodId = event.target.dataset.foodId;
    this.props.removeFood(foodId)
  };

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.calories}</td>
        <td>
          <Icon size='large' color='black' name='trash'
                data-food-id={this.props.id}
                onClick={this.handleRemoveClick}>
          </Icon>
        </td>
      </tr>
    )
  }
}

export default FoodRow;