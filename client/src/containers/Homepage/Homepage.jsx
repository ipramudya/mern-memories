import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../../redux/actions/posts';
import { Banner, List } from '../../components';

import { useCurrentIdAndFormContext } from '../../context/currentIdAndForm';
import Form from './components/Form/Form';
import Post from './components/Post/Post';

const Homepage = () => {
  const { setIsFormActive, currentId } = useCurrentIdAndFormContext();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <Banner setActiveForm={setIsFormActive} />
      <Form />
      <List>
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </List>
    </>
  );
};

export default Homepage;
