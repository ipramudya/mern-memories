import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getPosts } from '../../redux/actions/posts';
import { Banner, List, TopBar } from '../../components';

import { useCurrentIdAndFormContext } from '../../context/currentIdAndForm';
import Form from './LocalComponents/Form/Form';
import Post from './LocalComponents/Post/Post';
import Avatar from './LocalComponents/Avatar/Avatar';

const Homepage = () => {
  const { setIsFormActive, isFormActive, currentId } =
    useCurrentIdAndFormContext();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state, shallowEqual);
  const isUserAvailable = !!JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);

  return (
    <>
      <TopBar>
        <Banner
          setActiveForm={setIsFormActive}
          isUserAvailable={isUserAvailable}
        />
        {isUserAvailable && <Avatar />}
      </TopBar>
      {isFormActive && <Form />}
      <List>
        {posts?.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </List>
    </>
  );
};

export default Homepage;
