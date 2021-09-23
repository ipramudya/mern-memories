import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../../redux/actions/posts';
import { Banner, List } from '../../components';

import Form from './components/Form/Form';
import Post from './components/Post/Post';

const Homepage = () => {
  const [isFormActive, setIsFormActive] = useState(false);
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  console.log(posts);

  return (
    <>
      <Banner setActiveForm={setIsFormActive} />
      <Form setActiveForm={setIsFormActive} isFormActive={isFormActive} />
      <List>
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </List>
    </>
  );
};

export default Homepage;
