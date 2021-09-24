import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { AvatarContainer, StyledLink, H6 } from './Avatar.style';
import LoggedIn from './LoggedIn';

const Avatar = () => {
  const [localData, setLocalData] = useState(
    JSON.parse(localStorage.getItem('profile'))
  );

  console.log(localData);

  useEffect(() => {}, []);

  return (
    <AvatarContainer>
      {!localData ? (
        <>
          <H6 styledVariant="signIn">Please Sign In before writing memories</H6>
          <StyledLink to="/auth" styledVariant="signIn">
            Sign In
          </StyledLink>
        </>
      ) : (
        <LoggedIn profile={localData.googleProfile} />
      )}
    </AvatarContainer>
  );
};

export default Avatar;
