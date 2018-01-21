import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import logo from './app-logo/LO.png'
import { Image, Button } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
import { signOut } from './state/auth';
import { connect } from 'react-redux'

class TopNavBarGoals extends Component {
  state = {};

  render() {
    return (
        <Menu stackable>
          <Menu.Item>
            <Button as={Link} to={'/settings'} name='arrow left'>Go back</Button>
          </Menu.Item>
          <Menu.Item>
            <Image src={logo} size='tiny' floated='left' />
          </Menu.Item>
        </Menu>
    )
  }
}
export default withRouter(connect(
    state => ({
      user: state.auth.user
    }),
    { signOut }
)(TopNavBarGoals))