import moment from 'moment';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FiEdit } from 'react-icons/fi';
import { FaHeart, FaTrash } from 'react-icons/fa';

import { deletePost, likePost } from '../../../../redux/actions/posts';
import { useCurrentIdAndFormContext } from '../../../../context/currentIdAndForm';
import {
  Image,
  ImageWrapper,
  PostContainer,
  Content,
  FlexField,
  Button,
  H4,
  Text,
  Span,
} from './Post.style';

const Post = ({ post }) => {
  const { setCurrentId, setIsFormActive } = useCurrentIdAndFormContext();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  const handleEditPost = () => {
    setCurrentId(post._id);
    setIsFormActive((prev) => !prev);
  };

  const handleDeletePost = () => {
    dispatch(deletePost(post._id));
  };

  const handleLike = () => {
    dispatch(likePost(post._id));
  };

  const Like = () => {
    if (post.likes.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <FaHeart />
          <Text styledVariant="info">
            {post.likes.length > 2
              ? `You and ${post.likes.length - 1} others`
              : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}
          </Text>
        </>
      ) : (
        <>
          <FaHeart />
          <Text styledVariant="info">
            {post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
          </Text>
        </>
      );
    }

    return (
      <>
        <FaHeart />
        <Text styledVariant="info">Like</Text>
      </>
    );
  };

  return (
    <PostContainer>
      <ImageWrapper>
        <Image src={post?.selectedFile} alt={post?.title} />
        {(user?.result?.googleId || user?.result?._id) === post?.creator && (
          <FlexField styledFieldPossition="top">
            <Button
              onClick={handleEditPost}
              styledPlace="upper"
              styledPurpose="edit"
            >
              <FiEdit />
            </Button>
            <Button
              onClick={handleDeletePost}
              styledPlace="upper"
              styledPurpose="delete"
            >
              <FaTrash />
            </Button>
          </FlexField>
        )}
      </ImageWrapper>
      <Content>
        <FlexField styledFieldPossition="middle">
          <Text styledVariant="tags">
            {post?.tags[0].split(',').map((val) => `#${val} `)}
          </Text>
          <H4>{post?.title}</H4>
          <Text>
            <Span>{post?.name}</Span>
            {post?.message}
          </Text>
        </FlexField>
        <FlexField styledFieldPossition="bottom">
          <Button
            onClick={handleLike}
            disabled={!user?.result}
            styledDisabled={!user?.result}
          >
            <Like />
          </Button>
          <Text styledVariant="info">{moment(post?.createdAt).fromNow()}</Text>
        </FlexField>
      </Content>
    </PostContainer>
  );
};

export default Post;
