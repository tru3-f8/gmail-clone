import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton, Avatar } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className='header'>
      <div className='header_left'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src='https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png'
          alt=''
        />
      </div>
      <div className='header_middle'>
        <SearchIcon />
        <input type='text' placeholder='Search mail' />
        <ArrowDropDownIcon className='header_inputCaret' />
      </div>
      <div className='header_right'>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar onClick={signOut} src={user?.photoUrl} />
      </div>
    </div>
  );
};

export default Header;
