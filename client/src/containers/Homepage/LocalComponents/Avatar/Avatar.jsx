import { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import { logout } from '../../../../redux/actions/auth';
import { AvatarContainer } from './Avatar.style';
import LoggedIn from './LoggedIn';

const Avatar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const token = user?.token;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(logout());
    setUser(null);
    history.push('/auth');
  }, [dispatch, history]);

  useEffect(() => {
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) handleLogout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [token, handleLogout]);

  return (
    <AvatarContainer>
      <LoggedIn profile={user.result} handleLogout={handleLogout} />
    </AvatarContainer>
  );
};

export default Avatar;
