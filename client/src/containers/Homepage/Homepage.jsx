import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getPosts } from '../../redux/actions/posts';
import { Banner, List, Snackbar, Spinner, TopBar } from '../../components';
import { useCurrentIdAndFormContext } from '../../context/currentIdAndForm';
import Form from './LocalComponents/Form/Form';
import Post from './LocalComponents/Post/Post';
import Dashboard from './LocalComponents/Dashboard/Dashboard';
import useSnackbar from '../../hooks/useSnackbar';

const Homepage = () => {
  const { setIsFormActive, isFormActive, currentId } =
    useCurrentIdAndFormContext();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state, shallowEqual);
  const isUserAvailable = !!JSON.parse(localStorage.getItem('profile'));
  const snackbar = useSnackbar();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);

  return (
    <>
      {posts.error && (
        <Snackbar active={snackbar} colorType="danger" message={posts.error} />
      )}
      {posts.loading && <Spinner loading={posts.loading} />}
      <TopBar>
        <Banner
          setActiveForm={setIsFormActive}
          isUserAvailable={isUserAvailable}
        />
        {isUserAvailable && <Dashboard />}
      </TopBar>
      {isFormActive && <Form />}
      <List>
        {posts.data?.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </List>
    </>
  );
};

export default Homepage;
