import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../../redux/actions/posts';
import { Avatar, Banner, List, TopBar } from '../../components';

import { useCurrentIdAndFormContext } from '../../context/currentIdAndForm';
import Form from './LocalComponents/Form/Form';
import Post from './LocalComponents/Post/Post';

const Homepage = () => {
  const { setIsFormActive, isFormActive, currentId } =
    useCurrentIdAndFormContext();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <TopBar>
        <Banner setActiveForm={setIsFormActive} />
        <Avatar />
      </TopBar>
      {isFormActive && <Form />}
      <List>
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </List>
    </>
  );
};

export default Homepage;
