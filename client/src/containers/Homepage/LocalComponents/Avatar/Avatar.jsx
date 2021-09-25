import { useEffect, useState } from 'react';

import { AvatarContainer, StyledLink, H6 } from './Avatar.style';
import LoggedIn from './LoggedIn';

const Avatar = () => {
  const [localData, setLocalData] = useState(
    JSON.parse(localStorage.getItem('profile'))
  );

  useEffect(() => {
    setLocalData(JSON.parse(localStorage.getItem('profile')));
  }, [localData]);

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
        <LoggedIn profile={localData.googleProfile} setProfile={setLocalData} />
      )}
    </AvatarContainer>
  );
};

export default Avatar;
