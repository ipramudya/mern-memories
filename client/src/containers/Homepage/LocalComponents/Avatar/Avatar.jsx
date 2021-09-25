import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { AvatarContainer } from './Avatar.style';
import LoggedIn from './LoggedIn';

const Avatar = () => {
  const [localData, setLocalData] = useState(
    JSON.parse(localStorage.getItem('profile'))
  );
  const history = useHistory();

  useEffect(() => {
    setLocalData(JSON.parse(localStorage.getItem('profile')));
  }, [history]);

  return (
    <AvatarContainer>
      <LoggedIn profile={localData.result} setProfile={setLocalData} />
    </AvatarContainer>
  );
};

export default Avatar;
