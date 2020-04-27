import React from 'react';

import User from '../../components/User';
import Loading from '../../components/Loading';

import './UsersList.scss';

const UersList = ({ users }) => {
  return (
    <section className="users-list" data-testid="users-list">
      { users.length > 0
        ? users.map((user) => (
          <User
            key={user.id}
            infoUser={user}
          />
        ))
        : <Loading />
      }
    </section>
  )
};

export default UersList;
