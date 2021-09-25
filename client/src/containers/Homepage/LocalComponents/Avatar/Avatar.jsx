import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { AvatarContainer, StyledLink, H6 } from './Avatar.style';
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
      {!localData ? (
        <>
          <H6 styledvariant="signIn">Please Sign In before writing memories</H6>
          <StyledLink to="/auth" styledvariant="signIn">
            Sign In
          </StyledLink>
        </>
      ) : (
        <LoggedIn
          profile={
            localData.googleProfile ? localData.googleProfile : localData.result
          }
          setProfile={setLocalData}
        />
      )}
    </AvatarContainer>
  );
};

export default Avatar;
