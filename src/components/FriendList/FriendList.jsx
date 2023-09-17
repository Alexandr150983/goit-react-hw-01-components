import React from 'react';
import css from './Friends.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClassName = isOnline ? 'online' : 'offline';

  return (
    <li className={css.item}>
      <span className={css[statusClassName]}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};
