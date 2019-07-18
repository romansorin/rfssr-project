import React, { Component } from 'react'
import firebase from 'firebase'

import * as S from './styles'
import FIELDS from './fields'
import withForm from '../../components/withForm'

@withForm(FIELDS)

export default class Home extends Component {
  state = { loading: false, username: '', users: [] }

  componentDidMount = () => {
    const usersRef = firebase.database().ref('users')
    usersRef.on('value', (all) => {
      const users = all.val()
      const newState = []

      for (const user in users) {
        newState.push({
          id: user,
          username: users[user].username
        })
      }
      this.setState({
        users: newState
      })
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { username } = this.props

    const usersRef = firebase.database().ref('users')
    const user = {
      username: username.value
    }

    try {
      usersRef.push(user)
      this.setState({
        username: ''
      })
      username.value = ''
    } catch (error) {
      console.log('err', error)
    }
  }

  removeUser = (userID) => {
    firebase.database().ref(`/users/${userID}`).remove()
  }

  render () {
    const { users } = this.state

    return <S.HomePage>
      <h1>RFSSR Users</h1>
      <S.TextFields>
        {Object.values(FIELDS).map(field => this.props.renderTextField(field))}
        <S.AddUserButton onClick={this.handleSubmit}>
          Add User
        </S.AddUserButton>
      </S.TextFields>
      <div style={{ textAlign: 'left' }}>
        <h2 style={{ marginTop: '30px' }}>Users ({users.length}):</h2>
        <ul>
          {this.state.users.map((user) => {
            return (
              <li key={user.id} style={{ display: 'flex', flexDirection: 'row' }}>
                <p style={{ marginRight: '50px' }}>{user.username}</p>
                <S.RemoveUserButton onClick={() => this.removeUser(user.id)}>
                  Remove User
                </S.RemoveUserButton>
              </li>
            )
          })}
        </ul>
      </div>
    </S.HomePage>
  }
}
