import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';

function UserContainer ({ user, fetchUsers }) {
  useEffect(() => {
    fetchUsers()
  }, [])
  return (
    <div>
      <h1>Users</h1>
      { user.loading ? <p>Loading Data</p>: user.error ? <h2>{user.error}</h2> : (
        user && user.data && user.data.map(userData => <p key={userData.name}>{userData.name}</p>)
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
