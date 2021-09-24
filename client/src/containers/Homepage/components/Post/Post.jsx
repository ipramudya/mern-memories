import moment from 'moment';
import { useDispatch } from 'react-redux';
import { FiEdit } from 'react-icons/fi';
import { FaHeart, FaTrash } from 'react-icons/fa';

import { deletePost } from '../../../../redux/actions/posts';
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

  const handleEditPost = () => {
    setCurrentId(post._id);
    setIsFormActive((prev) => !prev);
  };

  const handleDeletePost = () => {
    dispatch(deletePost(post._id));
  };

  return (
    <PostContainer>
      <ImageWrapper>
        <Image src={post?.selectedFile} alt={post?.title} />
        <FlexField top>
          <Button upper edit onClick={handleEditPost}>
            <FiEdit />
          </Button>
          <Button upper remove onClick={handleDeletePost}>
            <FaTrash />
          </Button>
        </FlexField>
      </ImageWrapper>
      <Content>
        <Text tags>{post?.tags[0].split(',').map((val) => `#${val} `)}</Text>
        <H4>{post?.title}</H4>
        <Text message>
          <Span>{post?.creator}</Span>
          {post?.message}
        </Text>
        <FlexField bottom>
          <Button>
            <FaHeart />
            <Text bottom>Like {post?.likeCount}</Text>
          </Button>
          <Text bottom>{moment(post?.createdAt).fromNow()}</Text>
        </FlexField>
      </Content>
    </PostContainer>
  );
};

export default Post;
